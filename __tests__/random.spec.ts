import random from '../packages/quebec/src/random/random'

describe('random util', () => {
  it('should generate a random number', () => {
    const randomNumber = random()

    expect(randomNumber).not.toBeNaN()
    expect(randomNumber).toBeGreaterThan(0)
  })
})
