function flattenArray<TNestedArrayElementType, TElement>(
  nestedArray: TNestedArrayElementType[][],
): TNestedArrayElementType[] {
  let flat: TElement[] = []

  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      flat = flat.concat(flattenArray(nestedArray[i] as unknown as TElement[][]))
    } else {
      flat.push(nestedArray[i] as unknown as TElement)
    }
  }
  return flat as unknown as TNestedArrayElementType[]
}

export default flattenArray
