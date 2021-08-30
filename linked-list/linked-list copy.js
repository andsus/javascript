class Node {
  constructor(element, previous=null, next=null) {
    this.element = element
    this.previous = previous
    this.next = next
  }
}

export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  // find 
  find(element) {
    let current = this.head
    while (current.element !== element) {
      current = current.next
    }
    return current
  }

  // insert element at tail
  push(element) {
    const node = new Node(element)
    if (this.size === 0) {
      this.head = node
    } else { // add to tail
      node.previous = this.tail
      this.tail.next = node
    }
    this.tail = node
    this.size++
}

  // remove element at back
  pop() {
    const node = this.tail
    if (this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = node.previous
      this.tail.next = null
    }
    this.size--
    return node.element
    // if (this.head === null) {
    //   return null
    // } 
    // let current = this.head, previous = null
    // while(current.next !== null) {
    //   previous = current
    //   current = current.next
    // }
    // // we're in the last element
    // let val = current.element
    // if (previous === null) {
    //   // thre was only one element
    //   this.head = null
    // } else {
    //   previous.next = null
    //   current.previous = null
    // }
    // return val
  }

  // remove element at front
  shift() {
    const node = this.head
    if (this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = node.next
      this.head.previous = null
    }
    this.length--
    return node.element
    // if (this.head === null) {
    //   return null
    // } 
    // let val = this.head.element
    // if (this.head.next == null) {
    //   // there's only one element
    //   this.head = null
    // } else {
    //   let newHead = this.head.next
    //   this.head.next = null
    //   newHead.previous = null
    //   this.head = newHead
    // }
    // return val    
  }

  // insert element at front
  unshift(element) {
    const node = new Node(element)
    if (this.size === 0) {
      this.head = node
    } else {
      node.next = this.head
      this.head.previous = node
    }
    this.head = node
    this.size++
    // this.head = new Node(v, null, this.head)
    // if (this.head.next !== null) {
    //   this.head.next.previous = this.head
    // }
  }

  // delete the first occurence of a specified element
  delete(value) {
    // let current = this.find(v)
    // if (current != null) {
    //   current.previous.next = current.next
    //   current.next.previous = current.previous
    //   current.next = null
    //   current.previous = null
    // }
    // let current = this.head
    // let previous = null
    // while(current != null) {
    //   if (current.element === v) {
    //     // remove current element
    //     if (current == this.head) {
    //       return this.shift()
    //     } else {
    //       // previous has to point to something valid
    //       previous.next = current.next
    //       if (current.next !== null) {

    //         current.next.previous = previous
    //       }
    //       break
    //     }
    //   }
    //   previous=current
    //   current=current.next
    // }
    let nodeToDel = this.head;
    while (nodeToDel.value !== value && nodeToDel.next) {
      nodeToDel = nodeToDel.next;
    }
    if (nodeToDel.value === value) {
      if (!nodeToDel.next) {
        this.tail = nodeToDel.previous;
      }
      else if (!nodeToDel.previous) {
        this.head = nodeToDel.next;
      } else {
        nodeToDel.previous.next = nodeToDel.next;
        nodeToDel.next.previous = nodeToDel.previous;
      }
      this.length--
    }
  }

  // count the number of items in the list
  count() {
    // let current = this.head
    // let count = 0
    // while (null !== current) {
    //   count++
    //   current = current.next
    // }
    // return count
    return this.size
  }
}

