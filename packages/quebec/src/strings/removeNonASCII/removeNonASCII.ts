function removeNonASCII(str: string) {
  // Matches non-printable ASCII chars -
  // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
  return str.replace(/[^\x20-\x7E]/g, '')
}

export default removeNonASCII
