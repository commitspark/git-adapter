import { GitAdapterError, ErrorCode } from '../../src/errors.ts'

describe('GitAdapterError', () => {
  it('should store the error code and message', () => {
    const code = ErrorCode.NOT_FOUND
    const message = 'Resource not found'
    const error = new GitAdapterError(code, message)

    expect(error.code).toBe(code)
    expect(error.message).toBe(message)
    expect(error.name).toBe('GitAdapterError')
  })

  it('should be an instance of Error', () => {
    const error = new GitAdapterError(
      ErrorCode.INTERNAL_ERROR,
      'Internal error',
    )
    expect(error).toBeInstanceOf(Error)
    expect(error).toBeInstanceOf(GitAdapterError)
  })
})
