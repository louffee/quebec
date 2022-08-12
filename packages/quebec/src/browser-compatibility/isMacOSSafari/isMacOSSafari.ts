function isMacOSSafari(): boolean {
  return /Mac+/.test(navigator?.platform) && /Safari/.test(navigator?.userAgent)
}

export default isMacOSSafari
