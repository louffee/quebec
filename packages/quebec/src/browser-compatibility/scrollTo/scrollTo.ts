function scrollTo(x: number, y: number): void {
  window.requestAnimationFrame(() => {
    window.scrollTo(x, y)
  })
}

export default scrollTo
