function isiOSSafari(): boolean {
  return /iP(hone|od|ad)/.test(navigator?.platform) && /Safari/.test(navigator?.userAgent)
}

export default isiOSSafari
