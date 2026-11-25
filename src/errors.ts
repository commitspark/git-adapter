/** @public */
export enum ErrorCode {
  BAD_REQUEST = 'BAD_REQUEST',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  CONFLICT = 'CONFLICT',
  TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS',
  BAD_REPOSITORY_DATA = 'BAD_REPOSITORY_DATA',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
}

export class GitAdapterError extends Error {
  public readonly code: ErrorCode

  constructor(code: ErrorCode, message: string) {
    super(message)
    this.name = 'GitAdapterError'
    this.code = code
  }
}
