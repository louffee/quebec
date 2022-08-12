import lowerCase from '../lowerCase/lowerCase'
import words from '../words/words'

function kebabCase(text: string) {
  return words(text).map(lowerCase).join('-')
}

export default kebabCase
