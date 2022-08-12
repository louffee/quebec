import nullish from '../../nullish/nullish'

function coerceToString(val: string, defaultValue = ''): string {
  if (nullish(val)) {
    return defaultValue
  }

  if (typeof val === 'string') {
    return val
  }

  return String(val)
}

export default coerceToString
