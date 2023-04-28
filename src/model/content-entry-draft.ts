import { ContentEntry } from './content-entry'

export interface ContentEntryDraft extends ContentEntry {
  deletion: boolean
}
