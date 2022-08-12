function isGoogleChrome(): boolean {
  return /Chrome/.test(navigator?.userAgent) || (typeof window === 'object' && 'chrome' in window)
}

export default isGoogleChrome
