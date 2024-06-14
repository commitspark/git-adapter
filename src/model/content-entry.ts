export interface ContentEntry {
  id: string
  metadata: ContentEntryMetadata
  data: Record<string, unknown>
}

export interface ContentEntryMetadata {
  type: string
  referencedBy?: string[]
}
