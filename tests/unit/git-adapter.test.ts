import { ENTRY_ID_INVALID_CHARACTERS } from '../../src/git-adapter.ts'

describe('ENTRY_ID_INVALID_CHARACTERS', () => {
  it.each([['my-id'], ['id123'], ['path_to_entry'], ['valid.id']])(
    'should NOT match valid ID: %s',
    (id) => {
      expect(ENTRY_ID_INVALID_CHARACTERS.test(id)).toBe(false)
    },
  )

  it.each([
    ['id/with/slash'],
    ['id\\with\\backslash'],
    ['id*with*asterisk'],
    ['id"with"quote'],
    ['id<with<lt'],
    ['id>with>gt'],
    ['id:with:colon'],
    ['id|with|pipe'],
    ['id?with?question'],
  ])('should match invalid ID: %s', (id) => {
    expect(ENTRY_ID_INVALID_CHARACTERS.test(id)).toBe(true)
  })

  it('should match control characters', () => {
    expect(ENTRY_ID_INVALID_CHARACTERS.test('id\u0000with\u0000null')).toBe(
      true,
    )
    expect(ENTRY_ID_INVALID_CHARACTERS.test('id\u001Fwith\u001Fcontrol')).toBe(
      true,
    )
  })
})
