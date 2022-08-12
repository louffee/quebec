import nullish from '../../nullish/nullish'

function toString<TValue>(value: TValue): string | null {
  if (nullish(value)) {
    return null
  }

  if (typeof value === 'string') {
    return value
  }

  return String(value)
}

export default toString
