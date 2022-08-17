function hasProp<TExpectedHostObject extends object>(
  obj: any,
  prop: keyof TExpectedHostObject,
): obj is TExpectedHostObject {
  return obj.hasOwnProperty(prop)
}

export default hasProp
