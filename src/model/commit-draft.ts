import { EntryDraft } from './entry-draft.ts'

export interface CommitDraft {
  /**
   * Name of the branch to commit to.
   */
  ref: string
  /**
   * Hash of the commit that the caller read and validated the draft against. The new commit must have this commit as
   * its parent, and the branch must only be moved to the new commit if it still points to `parentSha`. Otherwise,
   * adapters must throw a `GitAdapterError` with code `CONFLICT`, so that callers can repeat their work against the
   * new branch head instead of overwriting changes they have not seen.
   */
  parentSha: string
  message: string
  entries: EntryDraft[]
}
