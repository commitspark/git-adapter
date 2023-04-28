import { ContentEntryMetadata } from './content-entry-metadata'

export interface ContentEntry {
  id: string
  metadata: ContentEntryMetadata
  data: Record<string, unknown>
}
