function isInternetExplorer(): boolean {
  return typeof window !== 'undefined' && window.navigator.userAgent.indexOf('MSIE') > -1
}

export default isInternetExplorer
