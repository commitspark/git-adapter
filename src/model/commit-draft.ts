import { EntryDraft } from './entry-draft.ts'

export interface CommitDraft {
  ref: string
  parentSha: string | undefined
  message: string
  entries: EntryDraft[]
}
