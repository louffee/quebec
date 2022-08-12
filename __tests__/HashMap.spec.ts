import HashMap from '../packages/quebec/src/HashMap/HashMap'

describe('HashMap util', () => {
  it('should create an instance', () => {
    const sut = new HashMap()

    expect(sut).toBeInstanceOf(HashMap)
  })

  it('should contain length equal to 0 since no element is added', () => {
    const sut = new HashMap()

    expect(sut.length).toBe(0)
  })

  it('should successfully add an element', () => {
    const sut = new HashMap<string, string>()
    const key = 'I am a key'
    const value = 'And I am a value'

    sut.set(key, value)

    expect(sut.length).toBe(1)
    expect(sut.get(key)).toBe(value)
  })

  it('should return undefined after trying to access an inexistent value', () => {
    const sut = new HashMap<string, string>()
    const key = 'I am a key'

    expect(sut.get(key)).toBeUndefined()
  })

  it('should remove the element after invoking remove() with the correct key', () => {
    const sut = new HashMap<string, string>()
    const key = '{{key}}'
    const value = '💪'

    sut.set(key, value)
    expect(sut.length).toBe(1)

    const element = sut.remove(key)

    expect(element).toBe(value)
    expect(sut.length).toBe(0)
  })
})
