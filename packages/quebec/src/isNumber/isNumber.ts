function isNumber<TPossibleNumber>(possibleNumber: TPossibleNumber): boolean {
  return typeof possibleNumber === 'number'
}

export default isNumber
