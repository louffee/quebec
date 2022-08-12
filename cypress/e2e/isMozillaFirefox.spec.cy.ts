import isMozillaFirefox from '../../packages/quebec/src/browser-compatibility/isMozillaFirefox/isMozillaFirefox'

describe('isMozillaFirefox() util', () => {
  it('should return true if the browser is Mozilla Firefox', { browser: 'firefox' }, () => {
    const sut = isMozillaFirefox()

    expect(sut).to.be.true
  })

  it('should return false when NOT using Mozilla Firefox', { browser: '!firefox' }, () => {
    const sut = isMozillaFirefox()

    expect(sut).to.be.false
  })
})
