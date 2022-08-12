function scrollToTop(): void {
  if (typeof document?.documentElement === 'undefined') {
    return
  }

  const topAxis = document.documentElement?.scrollTop || document?.body?.scrollTop

  if (topAxis > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, topAxis - topAxis / 8)
  }
}

export default scrollToTop
