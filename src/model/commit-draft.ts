import { EntryDraft } from './entry-draft'

export interface CommitDraft {
  ref: string
  parentSha: string | undefined
  message: string
  entries: EntryDraft[]
}
