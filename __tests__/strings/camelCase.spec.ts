import camelCase from '../../packages/quebec/src/strings/camelCase/camelCase'

describe('strings/camelCase util', () => {
  it('should convert Ice Cream Sandwich into iceCreamSandwich (camel case form)', () => {
    expect(camelCase('Ice Cream Sandwich')).toBe('iceCreamSandwich')
  })
})
