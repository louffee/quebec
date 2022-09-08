import AssertionException from './AssertionException'
import type AssertionOptions from './AssertionOptions'

const defaultAssertionOptions: AssertionOptions<any> = {
  assertionOutcome: 'throw',
}

function assert<E extends Error>(
  condition: boolean,
  message?: string,
  { assertionOutcome }: AssertionOptions<E> = defaultAssertionOptions,
) {
  if (!condition) {
    const assertionStatement = `Assertion failed: ${message}`

    switch (assertionOutcome) {
      case 'error': {
        console.error(assertionStatement)
        break
      }
      case 'warn': {
        console.warn(assertionStatement)
        break
      }
      default: {
        throw new AssertionException(assertionStatement)
      }
    }
  }
}

export default assert
