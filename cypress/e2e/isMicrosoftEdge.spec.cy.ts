import isMicrosoftEdge from '../../packages/quebec/src/browser-compatibility/isMicrosoftEdge/isMicrosoftEdge'

describe('isMicrosoftEdge() util', () => {
  it('should return true when using the Microsoft Edge browser', { browser: 'edge' }, () => {
    const sut = isMicrosoftEdge()

    expect(sut).to.be.true
  })

  it('should NOT agree with true whether not using Microsoft Edge browser', { browser: '!edge' }, () => {
    const sut = isMicrosoftEdge()

    expect(sut).to.be.false
  })
})
