import { CommitDraft } from './model/commit-draft.ts'
import { Commit } from './model/commit.ts'
import { Entry } from './model/entry.ts'
import { EntryHash } from './model/entry-hash.ts'

export interface GitAdapter {
  /**
   * Lists all entries of a commit together with a hash of their content, without retrieving the content itself.
   */
  getEntryHashes(commitHash: string): Promise<EntryHash[]>
  /**
   * Retrieves the content of the entries with the given IDs as of the given commit.
   */
  getEntriesByIds(commitHash: string, ids: string[]): Promise<Entry[]>
  getSchema(commitHash: string): Promise<string>
  getLatestCommitHash(ref: string): Promise<string>
  createCommit(commitDraft: CommitDraft): Promise<Commit>
}

export const ENTRY_ID_INVALID_CHARACTERS = /[/\\*"<>:|?\u0000-\u001F]/
