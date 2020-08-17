// 'doubly linked list'

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

class DoublyLinkedList {
  constructor(firstValue) {
    this.head = new Node(firstValue)
    this.tail = this.head
    this.length = 1
  }

  prepend(value) {
    const oldHead = this.head
    this.head = new Node(value)
    this.head.next = oldHead
    oldHead.previous = this.head

    this.length += 1
    return this.head
  }

  moveToIndex(index) {
    let currentIndex = 0
    let currentNode = this.head

    while (currentIndex < index - 1) {
      currentIndex += 1
      currentNode = this.head.next
    }
    return currentNode
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value)
      return
    }

    if (index > this.length - 1) {
      this.append(value)
      return
    }

    const beforeNode = this.moveToIndex(index)

    const afterNode = beforeNode.next
    beforeNode.next = new Node(value)
    beforeNode.next.next = afterNode
    beforeNode.next.previous = beforeNode
    afterNode.previous = beforeNode.next

    this.length += 1
    return beforeNode.next
  }

  delete(index) {
    if (index === 0) {
      this.head = this.head.next
      this.head.previous = null
      this.length -= 1
      return
    }
    if (index > this.length - 1) {
      return
    }
    const beforeNode = this.moveToIndex(index)
    this.deleteAfter(beforeNode)
  }

  insertAfter(node, value) {
    const oldNext = node.next
    node.next = new Node(value)
    node.next.next = oldNext
    node.next.previous = node
    oldNext.previous = node.next

    this.length += 1
    return node.next
  }

  deleteAfter(node) {
    const nodeToDelete = node.next
    node.next = node.next.next
    node.next.previous = node
    nodeToDelete.next = null
    nodeToDelete.previous = null
    this.length -= 1
  }

  append(value) {
    this.tail.next = new Node(value)
    this.tail.next.previous = this.tail
    this.tail = this.tail.next

    this.length += 1
    return this.tail
  }

  print() {
    let current = this.head
    const result = []
    do {
      result.push(current.value)
      current = current.next
    } while (current !== null)
    return result.join(' ') + ` length: ${this.length}`
  }

  printPointers() {
    let current = this.head
    const result = []
    do {
      result.push({
        value: current.value,
        next: current.next ? current.next.value : 'null',
        previous: current.previous ? current.previous.value: 'null',
      })
      current = current.next
    } while (current !== null)
    return result
  }
}

const x = new DoublyLinkedList('oh-hai')

x.append('there')
x.append('world')
x.append('whoopee!')

console.log(x.print())
console.log(x.head.value)
console.log(x.head.next.value)

x.prepend('um')
console.log(x.print())

x.insertAfter(x.head, 'wow')
console.log(x.print())
console.log('pointers:', x.printPointers())

x.deleteAfter(x.head.next.next)
console.log(x.print())
console.log('pointers:', x.printPointers())

x.insert(2, 'wowzer')
console.log(x.print())

x.delete(0)
console.log(x.print())

x.insert(20000, 'at-end')
console.log(x.print())

x.delete(500000000)
console.log(x.print())

console.log('pointers:', x.printPointers())

x.reverse()
console.log(x.print())

console.log('pointers:', x.printPointers())
