import coerceToString from '../coerceToString/coerceToString'

function lowerCase(text: string): string {
  return coerceToString(text).toLowerCase()
}

export default lowerCase
