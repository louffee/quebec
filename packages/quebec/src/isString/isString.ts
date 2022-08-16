function isString<TPossibleString>(possibleString?: TPossibleString): boolean {
  return typeof possibleString === 'string'
}

export default isString
