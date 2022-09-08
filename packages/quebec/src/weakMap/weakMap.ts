function weakMap<TKey extends object, TValue>(entries?: readonly [TKey, TValue][] | null): WeakMap<TKey, TValue> {
  return new WeakMap(entries)
}

export default weakMap
