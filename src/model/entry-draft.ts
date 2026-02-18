import { Entry } from './entry.ts'

export interface EntryDraft extends Entry {
  deletion: boolean
}
