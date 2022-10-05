import { ContentEntryDraft } from './content-entry-draft'

export class CommitDraft {
  constructor(
    readonly ref: string,
    readonly parentSha: string | undefined,
    readonly message: string,
    readonly contentEntries: ContentEntryDraft[],
  ) {}
}
