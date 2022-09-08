class AssertionException extends Error {
  constructor(message: string) {
    super(`Assertion failed: ${message}`)
  }
}

export default AssertionException
