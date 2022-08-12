import coerceToString from '../coerceToString/coerceToString'

function characters(text: string): string[] {
  const coercedText = coerceToString(text)

  return coercedText.split('')
}

export default characters
