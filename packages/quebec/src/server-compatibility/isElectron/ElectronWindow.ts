interface ElectronWindow {
  process?: {
    type?: 'renderer' | 'browser' | 'nwjs'
    __nwjs?: any
  }
}

export default ElectronWindow
