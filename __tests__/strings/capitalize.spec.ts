import capitalize from '../../packages/quebec/src/strings/capitalize/capitalize'

describe('strings/capitalize util', () => {
  it('should convert ice cream sandwich into Ice cream sandwich (capitalize form)', () => {
    expect(capitalize('ice cream sandwich')).toBe('Ice cream sandwich')
  })
})
