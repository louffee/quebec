class LinkedListNode<TNode> {
  public element: TNode
  public next: null | LinkedListNode<TNode>

  constructor(element: TNode) {
    this.element = element
    this.next = null
  }
}

export default LinkedListNode
