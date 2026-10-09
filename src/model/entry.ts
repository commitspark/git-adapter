export interface Entry {
  /**
   * Path of the entry file relative to the entry folder, without file extension and with `/` as separator
   */
  id: string
  metadata: EntryMetadata
  data?: EntryData
}

export interface EntryMetadata {
  type: string
}

export type EntryData = Record<string, unknown> | null
