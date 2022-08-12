import snakeCase from '../../packages/quebec/src/strings/snakeCase/snakeCase'

describe('strings/snakeCase util', () => {
  it('should convert I love coffee into i_love_coffee (snake case form)', () => {
    expect(snakeCase('I love coffee')).toBe('i_love_coffee')
  })
})
