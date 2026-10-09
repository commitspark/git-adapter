import { ErrorCode, GitAdapterError } from './errors.ts'

const ENTRY_ID_SEGMENT_SEPARATOR = '/'
const ENTRY_ID_INVALID_CHARACTERS = /[\\*"<>:|?\u0000-\u001F]/

/**
 * Throws a `GitAdapterError` with code `BAD_REQUEST` if the given entry ID is not valid. Valid entry IDs consist of
 * one or more non-empty segments separated by `/`, where no segment starts with `.`, so that IDs can neither address
 * files outside the entry folder nor hidden files or folders.
 */
export const validateEntryId = (id: string): void => {
  if (ENTRY_ID_INVALID_CHARACTERS.test(id)) {
    throw new GitAdapterError(
      ErrorCode.BAD_REQUEST,
      `Entry ID "${id}" contains invalid characters; characters \\ * " < > : | ? and control characters are not permitted`,
    )
  }
  const segments = id.split(ENTRY_ID_SEGMENT_SEPARATOR)
  if (segments.some((segment) => segment === '')) {
    throw new GitAdapterError(
      ErrorCode.BAD_REQUEST,
      `Entry ID "${id}" must not be empty, start or end with "/" or contain "//"`,
    )
  }
  if (segments.some((segment) => segment.startsWith('.'))) {
    throw new GitAdapterError(
      ErrorCode.BAD_REQUEST,
      `Entry ID "${id}" must not contain segments starting with "."`,
    )
  }
}

/**
 * Returns whether any segment of the given `/`-separated path starts with `.`. Files whose path relative to the entry
 * folder is hidden are not entries.
 */
export const isHiddenPath = (path: string): boolean =>
  path
    .split(ENTRY_ID_SEGMENT_SEPARATOR)
    .some((segment) => segment.startsWith('.'))
