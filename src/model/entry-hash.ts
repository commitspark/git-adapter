export interface EntryHash {
  id: string
  /**
   * Opaque identifier of the entry's stored content (metadata and data). Equal hashes must imply equal content,
   * independent of entry ID and commit. The Git blob hash of the entry file satisfies this.
   */
  hash: string
}
