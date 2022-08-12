import { REGEXP_EXTENDED_ASCII, REGEXP_LATIN_WORD, REGEXP_WORD } from '../__internal/stringConstants'
import nullish from '../../nullish/nullish'
import coerceToString from '../coerceToString/coerceToString'

function words(text: string, pattern?: string | RegExp, flags: string = ''): string[] {
  const coercedText = coerceToString(text)

  let coercedPattern: RegExp

  if (nullish(pattern)) {
    coercedPattern = REGEXP_EXTENDED_ASCII.test(text) ? REGEXP_LATIN_WORD : REGEXP_WORD
    /* @ts-expect-error */
  } else if (pattern instanceof RegExp) {
    coercedPattern = pattern
  } else {
    coercedPattern = new RegExp(pattern, flags ?? '')
  }

  return coercedText.match(coercedPattern) ?? []
}

export default words
