import isRunningOnAnyOf from '../../packages/quebec/src/browser-compatibility/isRunningOnAnyOf/isRunningOnAnyOf'

describe('isRunningOnAnyOf() util', () => {
  it(
    'should check true for running on either Google Chrome, Microsoft Edge or Firefox',
    { browser: ['chrome', 'edge', 'firefox'] },
    () => {
      const sut = isRunningOnAnyOf('Google Chrome', 'Microsoft Edge', 'Firefox')

      expect(sut).to.be.true
    },
  )

  it(
    'should check false for running on Google Chrome instead of Firefox or Microsoft Edge',
    { browser: 'chrome' },
    () => {
      const sut = isRunningOnAnyOf('Firefox', 'Microsoft Edge')

      expect(sut).to.be.false
    },
  )
})
