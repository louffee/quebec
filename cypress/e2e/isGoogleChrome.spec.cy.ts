import isGoogleChrome from '../../packages/quebec/src/browser-compatibility/isGoogleChrome/isGoogleChrome'

describe('isGoogleChrome() util', () => {
  it('should return true when using the Google Chrome browser', { browser: 'chrome' }, () => {
    const sut = isGoogleChrome()

    expect(sut).to.be.true
  })

  it(
    'should NOT agree with true whether not using Google Chrome browser or Microsoft Edge',
    { browser: ['!chrome', '!edge'] },
    () => {
      const sut = isGoogleChrome()

      expect(sut).to.be.false
    },
  )

  it('should return true when using Microsoft Edge (chromium-based) browser', { browser: 'edge' }, () => {
    const sut = isGoogleChrome()

    expect(sut).to.be.true
  })
})
