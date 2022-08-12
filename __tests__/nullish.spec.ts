import nullish from '../packages/quebec/src/nullish/nullish'

describe('nullish util', () => {
  it('should validate true for undefined value', () => {
    const sut: undefined = undefined

    expect(nullish(sut)).toBeTruthy()
  })

  it('should validate true for null value', () => {
    const sut: null = null

    expect(nullish(sut)).toBeTruthy()
  })

  it('should validate false for zero', () => {
    const sut = 0

    expect(nullish(sut)).toBeFalsy()
  })

  it('should validate false for empty string', () => {
    const sut = ''

    expect(nullish(sut)).toBeFalsy()
  })

  it('should validate false for empty array', () => {
    const sut: never[] = []

    expect(nullish(sut)).toBeFalsy()
  })

  it('should validate false for empty object', () => {
    const sut: object = {}

    expect(nullish(sut)).toBeFalsy()
  })

  it('should validate false for false boolean', () => {
    const sut = false

    expect(nullish(sut)).toBeFalsy()
  })
})
