import type ElectronWindow from './ElectronWindow'

function isElectron(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.process &&
    ((window as ElectronWindow).process.type === 'renderer' || (window as ElectronWindow).process.__nwjs)
  )
}

export default isElectron
