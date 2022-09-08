function weakSet<TElement extends object>(...elements: TElement[]): WeakSet<TElement> {
  return new WeakSet<TElement>(elements)
}

export default weakSet
