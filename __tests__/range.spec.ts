import range from '../packages/quebec/src/range/range'

describe('range util', () => {
  it('should generate an array for the range from 1 to 100', () => {
    const sut = range(1, 100)

    expect(sut).toHaveLength(100)
    expect(sut[0]).toBe(1)
    expect(sut[99]).toBe(100)
  })
})
