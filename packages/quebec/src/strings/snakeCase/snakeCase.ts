import lowerCase from '../lowerCase/lowerCase'
import words from '../words/words'

function snakeCase(text: string) {
  return words(text).map(lowerCase).join('_')
}

export default snakeCase
