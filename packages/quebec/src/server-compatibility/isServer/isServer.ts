function isServer(): boolean {
  return typeof window === 'undefined'
}

export default isServer
