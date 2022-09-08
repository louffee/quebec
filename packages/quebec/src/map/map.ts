function map<TKey, TValue>(entries?: readonly (readonly [TKey, TValue])[] | null): Map<TKey, TValue> {
  const result = new Map<TKey, TValue>(entries)
  return result
}

export default map
