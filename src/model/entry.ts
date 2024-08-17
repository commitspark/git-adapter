export interface Entry {
  id: string
  metadata: EntryMetadata
  data?: EntryData
}

export interface EntryMetadata {
  type: string
  referencedBy?: string[]
}

export type EntryData = Record<string, unknown> | null
