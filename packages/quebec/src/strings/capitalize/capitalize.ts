import coerceToString from '../coerceToString/coerceToString'

function capitalize(text: string, restToLower = false) {
  let subjectString = coerceToString(text)

  const restToLowerCaseBoolean = restToLower
  if (subjectString === '') {
    return ''
  }
  if (restToLowerCaseBoolean) {
    subjectString = subjectString.toLowerCase()
  }

  return subjectString.substr(0, 1).toUpperCase() + subjectString.substr(1)
}

export default capitalize
