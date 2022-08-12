function isBrowserTabFocused(): boolean {
  return typeof document !== 'undefined' && !document.hidden
}

export default isBrowserTabFocused
