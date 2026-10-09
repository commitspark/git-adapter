export interface Entry {
  id: string
  metadata: EntryMetadata
  data?: EntryData
}

export interface EntryMetadata {
  type: string
}

export type EntryData = Record<string, unknown> | null
