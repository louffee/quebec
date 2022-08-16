function isObject<TPossibleObject>(possibleObject?: TPossibleObject): boolean {
  return typeof possibleObject === 'object' && !Array.isArray(possibleObject) && possibleObject !== null
}

export default isObject
