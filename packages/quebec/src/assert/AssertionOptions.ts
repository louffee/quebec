import type AssertionOutcome from './AssertionOutcome'

interface AssertionOptions<E extends Error> {
  assertionOutcome?: AssertionOutcome | E
}

export default AssertionOptions
