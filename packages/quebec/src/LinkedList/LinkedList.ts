import LinkedListNode from './LinkedListNode'

class LinkedList<TElement> {
  private head: LinkedListNode<TElement> | null
  private totalSize: number

  constructor() {
    this.head = null
    this.totalSize = 0
  }

  public removeFirst(): void {
    if (this.head === null) {
      return
    }
    this.head = this.head.next
    this.totalSize--
  }

  public removeElement(element: TElement): void {
    if (this.head === null) {
      return
    }
    if (this.head.element === element) {
      this.removeFirst()
    } else {
      let current = this.head
      let previous = this.head

      while (current.next !== null) {
        if (current.element === element) {
          previous.next = current.next
          this.totalSize--
          return
        }
        previous = current
        current = current.next
      }
    }
  }

  public indexOf(element: TElement): number {
    if (this.head === null) {
      return -1
    }

    let current = this.head
    let index = 0

    while (current.next !== null) {
      if (current.element === element) {
        return index
      }

      current = current.next
      index++
    }
    return -1
  }

  public insertAt(element: TElement, index: number): void {
    if (index < 0 || index > this.totalSize) {
      throw new Error('Index out of bounds')
    }
    if (index === 0) {
      this.add(element)
    } else {
      const node = new LinkedListNode(element)

      let current = this.head
      let previous = this.head

      for (let i = 0; i < index; i++) {
        previous = current
        current = current.next
      }

      previous.next = node
      node.next = current

      this.totalSize++
    }
  }

  public add(element: TElement): void {
    const node = new LinkedListNode(element)

    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head

      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }

    this.totalSize++
  }

  public get size(): number {
    return this.totalSize
  }

  public get isEmpty(): boolean {
    return this.totalSize === 0
  }
}

export default LinkedList
