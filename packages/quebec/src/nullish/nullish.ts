function nullish<TNullableValue>(value: TNullableValue | null | undefined): value is TNullableValue {
  return value === null || value === undefined
}

export default nullish
