import { CommitDraft } from './model/commit-draft'
import { Commit } from './model/commit'
import { ContentEntry } from './model/content-entry'

export interface GitAdapter {
  setRepositoryOptions(repositoryOptions: GitRepositoryOptions): Promise<void>
  getContentEntries(commitHash: string): Promise<ContentEntry[]>
  getSchema(commitHash: string): Promise<string>
  getLatestCommitHash(ref: string): Promise<string>
  createCommit(commitDraft: CommitDraft): Promise<Commit>
}

export type GitRepositoryOptions = Record<string, any>

export const ENTRY_EXTENSION = '.yaml'
export const ENTRY_FOLDER_NAME = 'entries'
export const SCHEMA_FOLDER_NAME = 'schema'
export const SCHEMA_FILENAME = 'schema.graphql'
