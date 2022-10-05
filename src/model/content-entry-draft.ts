import { ContentEntry } from './content-entry'
import { ContentEntryMetadata } from './content-entry-metadata'

export class ContentEntryDraft extends ContentEntry {
  constructor(
    id: string,
    metadata: ContentEntryMetadata,
    data: Record<string, unknown>,
    readonly deletion: boolean,
  ) {
    super(id, metadata, data)
  }
}
