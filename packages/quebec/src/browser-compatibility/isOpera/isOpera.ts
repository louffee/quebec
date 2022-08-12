function isOpera(): boolean {
  return typeof window !== 'undefined' && window.navigator.userAgent.indexOf('Opera') > -1
}

export default isOpera
