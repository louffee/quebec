function isMozillaFirefox(): boolean {
  return typeof window !== 'undefined' && window.navigator.userAgent.indexOf('Firefox') > -1
}

export default isMozillaFirefox
