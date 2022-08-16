import isInteger from '../isInteger/isInteger'

function isFloat<TPossibleFloat>(possibleFloat: TPossibleFloat): boolean {
  return typeof possibleFloat === 'number' && !isInteger(possibleFloat)
}

export default isFloat
