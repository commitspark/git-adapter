import { CommitDraft } from './model/commit-draft.ts'
import { Commit } from './model/commit.ts'
import { Entry } from './model/entry.ts'

export interface GitAdapter {
  getEntries(commitHash: string): Promise<Entry[]>
  getSchema(commitHash: string): Promise<string>
  getLatestCommitHash(ref: string): Promise<string>
  createCommit(commitDraft: CommitDraft): Promise<Commit>
}

export const ENTRY_ID_INVALID_CHARACTERS = /[/\\*"<>:|?\u0000-\u001F]/
