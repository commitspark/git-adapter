import { CommitDraft } from './model/commit-draft.ts'
import { Commit } from './model/commit.ts'
import { Entry } from './model/entry.ts'
import { EntryHash } from './model/entry-hash.ts'

/**
 * Reads return the state of the given commit and nothing else, as callers cache their results by commit hash
 * indefinitely.
 */
export interface GitAdapter {
  /**
   * Lists all entries of a commit together with a hash of their content, without retrieving the content itself. The
   * order of the list has no meaning.
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
   * Resolves a branch name, tag name or commit hash to the hash of the commit it points to. A commit hash resolves to
   * itself.
   */
  getLatestCommitHash(ref: string): Promise<string>
  createCommit(commitDraft: CommitDraft): Promise<Commit>
}
