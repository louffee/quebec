import isBrowser from '../../packages/quebec/src/browser-compatibility/isBrowser/isBrowser'

describe('isBrowser() util', () => {
  it('should return true', () => {
    const sut = isBrowser()

    expect(sut).to.be.true
  })
})
