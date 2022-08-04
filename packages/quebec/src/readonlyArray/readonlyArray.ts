function readonlyArray<TElement>(array: TElement[]): ReadonlyArray<TElement> {
  return Object.freeze(array);
}

export default readonlyArray;
