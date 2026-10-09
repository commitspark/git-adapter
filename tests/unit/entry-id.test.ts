import { ErrorCode, GitAdapterError } from '../../src/errors.ts'
import { isHiddenPath, validateEntryId } from '../../src/entry-id.ts'

describe('validateEntryId', () => {
  it.each([
    ['my-id'],
    ['id123'],
    ['path_to_entry'],
    ['valid.id'],
    ['folder/id'],
    ['folder/sub-folder/id'],
    ['folder.with.dots/id'],
  ])('should accept valid ID: %s', (id) => {
    expect(() => validateEntryId(id)).not.toThrow()
  })

  it.each([
    ['id\\with\\backslash'],
    ['id*with*asterisk'],
    ['id"with"quote'],
    ['id<with<lt'],
    ['id>with>gt'],
    ['id:with:colon'],
    ['id|with|pipe'],
    ['id?with?question'],
    ['id\u0000with\u0000null'],
    ['id\u001Fwith\u001Fcontrol'],
    [''],
    ['/id'],
    ['id/'],
    ['folder//id'],
    ['.hidden'],
    ['folder/.hidden'],
    ['.folder/id'],
    ['.'],
    ['..'],
    ['../id'],
    ['folder/../id'],
    ['folder/./id'],
  ])('should reject invalid ID: %j', (id) => {
    let error: unknown
    try {
      validateEntryId(id)
    } catch (err) {
      error = err
    }
    expect(error).toBeInstanceOf(GitAdapterError)
    expect((error as GitAdapterError).code).toBe(ErrorCode.BAD_REQUEST)
  })
})

describe('isHiddenPath', () => {
  it.each([['a.yaml'], ['folder/a.yaml'], ['folder.x/a.yaml']])(
    'should not consider path hidden: %s',
    (path) => {
      expect(isHiddenPath(path)).toBe(false)
    },
  )

  it.each([
    ['.a.yaml'],
    ['.yaml'],
    ['.folder/a.yaml'],
    ['folder/.a.yaml'],
    ['folder/.sub/a.yaml'],
  ])('should consider path hidden: %s', (path) => {
    expect(isHiddenPath(path)).toBe(true)
  })
})
