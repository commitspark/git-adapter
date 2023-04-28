import { ContentEntryDraft } from './content-entry-draft'

export interface CommitDraft {
  ref: string
  parentSha: string | undefined
  message: string
  contentEntries: ContentEntryDraft[]
}
