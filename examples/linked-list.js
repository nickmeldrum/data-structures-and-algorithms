console.log('linked list')

class LinkedList {
  constructor(value) {
    this.head = this.createNode(value)
    this.tail = this.head
  }

  createNode(value) {
    return { value, next: null }
  }

  prepend(value) {
    const oldHead = this.head
    this.head = this.createNode(value)
    this.head.next = oldHead
  }

  append(value) {
    const oldTail = this.tail
    this.tail = this.createNode(value)
    oldTail.next = this.tail
  }

  traverse(func) {
    let currentNode = this.head
    while (currentNode !== null) {
      func(currentNode.value)
      currentNode = currentNode.next
    }
  }

  print() {
    this.traverse(console.log)
  }
}

const x = new LinkedList('hello')
x.append('there')
x.append('world')
x.prepend('oh')
x.prepend('START:')
x.append('!')
x.print()

