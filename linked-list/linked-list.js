class Node {
  constructor(element, previous = null, next = null) {
    this.element = element
    this.previous = previous
    this.next = next
  }
}

export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // insert element at tail
  push(element) {
    const node = new Node(element)
    if (this.length === 0) {
      this.head = node
    } else { // add to tail
      node.previous = this.tail
      this.tail.next = node
    }
    this.tail = node
    this.length++
}

  // remove element at back
  pop() {
    const node = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = node.previous
      this.tail.next = null
    }
    this.length--
    return node.element
  }

  // remove element at head
  shift() {
    const node = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = node.next
      this.head.previous = null
    }
    this.length--
    return node.element    
  }

  // insert element at front
  unshift(element) {
    const node = new Node(element)
    if (this.length === 0) {
      this.head = node
    } else {
      node.next = this.head
      this.head.previous = node
    }
    this.head = node
    this.length++
  }

  // delete the first occurence of a specified element
  delete(element) {
    let nodeToDel = this.head
    while (nodeToDel.element !== element && nodeToDel.next) {
      nodeToDel = nodeToDel.next
    }
    if (nodeToDel.element === element) {
      if (!nodeToDel.next) {  // only 1 elem in list
        this.tail = nodeToDel.previous
      }
      else if (!nodeToDel.previous) { // only 2 elems in list
        this.head = nodeToDel.next
      } else {
        nodeToDel.previous.next = nodeToDel.next
        nodeToDel.next.previous = nodeToDel.previous
      }
      this.length--
    }
  }

  // count the number of element in the list
  count() {
    return this.length
  }
}

