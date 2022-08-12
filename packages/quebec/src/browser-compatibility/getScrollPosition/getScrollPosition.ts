function getScrollPosition<TElement extends HTMLElement>(element?: TElement) {
  if (typeof element === 'undefined') {
    return {}
  }

  let x: number | undefined
  let y: number | undefined

  if ('pageXOffset' in element) {
    x = (element as unknown as { pageXOffset: number }).pageXOffset
  }

  if ('pageYOffset' in element) {
    y = (element as unknown as { pageYOffset: number }).pageYOffset
  }

  if (typeof element?.scrollLeft === 'number') {
    x = element.scrollLeft
  }

  if (typeof element?.scrollTop === 'number') {
    y = element.scrollTop
  }

  return { x, y }
}

export default getScrollPosition
