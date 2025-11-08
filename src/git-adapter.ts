import { CommitDraft } from './model/commit-draft'
import { Commit } from './model/commit'
import { Entry } from './model/entry'

export interface GitAdapter {
  getEntries(commitHash: string): Promise<Entry[]>
  getSchema(commitHash: string): Promise<string>
  getLatestCommitHash(ref: string): Promise<string>
  createCommit(commitDraft: CommitDraft): Promise<Commit>
}

export const ENTRY_ID_INVALID_CHARACTERS = /[/\\*"<>:|?\u0000-\u001F]/
