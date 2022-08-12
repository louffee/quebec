function isChromium(): boolean {
  return typeof window !== 'undefined' && window.navigator.userAgent.indexOf('Chromium') > -1
}

export default isChromium
