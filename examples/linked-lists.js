console.log("linked lists")
/*
 * pros:
 * insertion/ deletion: O(1)
 * ordered
 *
 * cons:
 * lookup: O(n)
 *
 */

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }

  insertAfter(value) {
    this.next = new Node(value)
  }
}

class LinkedList {
  constructor(firstValue) {
    this.head = new Node(firstValue)
    this.tail = this.head
  }

  insertAtBeginning(value) {
    const oldHead = this.head
    this.head = new Node(value)
    this.head.next = oldHead
  }

  insertAfterPosition(node, value) {
    const oldNext = node.next
    node.next = new Node(value)
    node.next.next = oldNext
  }

  deleteAfter(node) {
    node.next = node.next.next
  }

  insertAtEnd(value) {
    this.tail.next = new Node(value)
    this.tail = this.tail.next
  }

  print() {
    let current = this.head
    const result = []
    do {
      result.push(current.value)
      current = current.next
    } while (current !== null)
    return result.join(' ')
  }
}

const x = new LinkedList('oh hai')

x.insertAtEnd('there')
x.insertAtEnd('world')
x.insertAtEnd('whoopee!')

console.log(x.print())
console.log(x.head.value)
console.log(x.head.next.value)

x.insertAtBeginning('um')
console.log(x.print())

x.insertAfterPosition(x.head, 'wow')
console.log(x.print())

x.deleteAfter(x.head.next.next)
console.log(x.print())

