function truncate(str: string, maxChars: number, append?: string, onlyFullWords = false): string {
  append = append || '...'
  maxChars = onlyFullWords ? maxChars + 1 : maxChars

  str = str.trim()
  if (str.length <= maxChars) {
    return str
  }
  str = str.substr(0, maxChars - append.length)

  str = onlyFullWords ? str.substr(0, str.lastIndexOf(' ')) : str.trim()
  return str + append
}

export default truncate
