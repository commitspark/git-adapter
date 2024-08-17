import { Entry } from './entry'

export interface EntryDraft extends Entry {
  deletion: boolean
}
