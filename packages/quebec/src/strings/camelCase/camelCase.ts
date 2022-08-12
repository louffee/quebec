import capitalize from '../capitalize/capitalize'
import lowerCase from '../lowerCase/lowerCase'
import words from '../words/words'

function camelCase(text: string): string {
  return words(text)
    .map(function $shouldReshapeIntoCamel__toCamelCase(word, index) {
      return index === 0 ? lowerCase(word) : capitalize(word, true)
    })
    .join('')
}

export default camelCase
