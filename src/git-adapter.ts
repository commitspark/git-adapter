import { CommitDraft } from './model/commit-draft'
import { Commit } from './model/commit'
import { Entry } from './model/entry'

export interface GitAdapter {
  setRepositoryOptions(repositoryOptions: GitRepositoryOptions): Promise<void>
  getEntries(commitHash: string): Promise<Entry[]>
  getSchema(commitHash: string): Promise<string>
  getLatestCommitHash(ref: string): Promise<string>
  createCommit(commitDraft: CommitDraft): Promise<Commit>
}

export type GitRepositoryOptions = Record<string, any>

export const ENTRY_EXTENSION = '.yaml'
export const PATH_ENTRY_FOLDER = 'commitspark/entries/'
export const PATH_SCHEMA_FILE = 'commitspark/schema/schema.graphql'

export const ENTRY_ID_INVALID_CHARACTERS = /[/\\*"<>:|?\u0000-\u001F]/
