function isMicrosoftEdge(): boolean {
  return typeof window !== 'undefined' && window.navigator.userAgent.indexOf('Edg') > -1
}

export default isMicrosoftEdge
