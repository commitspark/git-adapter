export interface ContentEntry {
  id: string
  metadata: ContentEntryMetadata
  data?: ContentEntryData
}

export interface ContentEntryMetadata {
  type: string
  referencedBy?: string[]
}

export type ContentEntryData = Record<string, unknown> | null
