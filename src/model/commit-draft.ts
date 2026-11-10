import { EntryDraft } from './entry-draft.ts'

export interface CommitDraft {
  /**
   * Name of the branch to commit to.
   */
  ref: string
  /**
   * Hash of the commit that the caller read and validated the draft against. The new commit must have this commit as
   * its parent, and the branch must only be moved to the new commit if it still points to `parentSha`. Otherwise,
   * adapters must throw a `GitAdapterError` with code `CONFLICT`, so that callers can repeat their work against the
   * new branch head instead of overwriting changes they have not seen.
   */
  parentSha: string
  /**
   * Commit message summarizing the change in a single line, i.e. without line breaks.
   */
  message: string
  /**
   * Optional details of the change, which may span multiple lines. Adapters should pass the body separately from
   * `message` to APIs that support it, and otherwise append it to `message` in the Git commit message, separated by a
   * blank line.
   */
  body?: string
  entries: EntryDraft[]
}
