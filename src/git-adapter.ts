import { CommitDraft } from './model/commit-draft.ts'
import { Commit } from './model/commit.ts'
import { Entry } from './model/entry.ts'
import { EntryHash } from './model/entry-hash.ts'

/**
 * Reads return the state of the given commit and nothing else, so that callers can cache results per commit hash
 * indefinitely.
 */
export interface GitAdapter {
  /**
   * Lists all entries of a commit together with a hash of their content, without retrieving the content itself, in any
   * order. Entry files whose name is not a valid entry ID are listed as well.
   */
  getEntryHashes(commitHash: string): Promise<EntryHash[]>
  /**
   * Retrieves the content of the entries with the given IDs as of the given commit.
   */
  getEntriesByIds(commitHash: string, ids: string[]): Promise<Entry[]>
  /**
   * Retrieves the schema as of the given commit.
   */
  getSchema(commitHash: string): Promise<string>
  /**
   * Resolves a branch name, tag name or full commit hash to a commit hash. An annotated tag resolves to the commit it
   * points to, a commit hash to itself.
   */
  getLatestCommitHash(ref: string): Promise<string>
  createCommit(commitDraft: CommitDraft): Promise<Commit>
}
