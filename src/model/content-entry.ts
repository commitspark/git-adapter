import { ContentEntryMetadata } from './content-entry-metadata'

export class ContentEntry {
  constructor(
    readonly id: string,
    readonly metadata: ContentEntryMetadata,
    readonly data: Record<string, unknown>,
  ) {}
}
