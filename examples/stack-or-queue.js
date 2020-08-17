class Stack {
  constructor() {
    this.data = []
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  push(value) {
    this.data[this.data.length] = value
  }

  pop() {
    const value = this.data[this.data.length - 1]
    this.data.length -= 1
    return value
  }
  isEmpty() {
    return this.length === 0
  }
}

console.log('stack')

const stack = new Stack()

stack.push('hi')
stack.push('world')

console.log(stack.pop())
console.log(stack.data)

stack.push('universe')
console.log(stack.data)

console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.pop())
console.log(stack.data)



class LinkedListStack {
  constructor() {
    this.head = null
  }

  createNode(value) {
    return { value, next: null }
  }

  peek() {
    return this.head ? this.head.value : undefined
  }

  push(value) {
    const newNode = this.createNode(value)
    const oldHead = this.head
    this.head = newNode
    this.head.next = oldHead
  }

  pop() {
    const value = this.peek()
    if (this.head) {
      this.head = this.head.next
    }
    return value
  }

  isEmpty() {
    return this.head === null
  }

  print() {
    const results = []
    let current = this.head
    while (current) {
      results.push(current.value)
      current = current.next
    }
    return results
  }
}

console.log('linked list stack')

const llstack = new LinkedListStack()

llstack.push('hi')
llstack.push('world')

console.log(llstack.pop())
console.log(llstack.print())

llstack.push('universe')
console.log(llstack.print())

console.log(llstack.peek())
console.log(llstack.isEmpty())
console.log(llstack.pop())
console.log(llstack.print())


class Queue {
  constructor() {
    this.data = []
    this.length = 0
    this.leftPos = 0
  }
  
  enqueue(value) {
    this.data[this.length + this.leftPos] = value
    this.length += 1
  }

  dequeue() {
    const value = this.data[this.leftPos]
    delete this.data[this.leftPos]
    this.length -= 1
    this.leftPos += 1
    return value
  }
}

console.log('queue')
const queue = new Queue()

queue.enqueue('hi')
queue.enqueue('world')

console.log(queue.dequeue())
console.log(queue.data)

queue.enqueue('universe')
console.log(queue.data)

console.log(queue.dequeue())
console.log(queue.data)

queue.enqueue('universe2')
queue.enqueue('universe3')
queue.enqueue('universe4')
console.log(queue.data)

console.log(queue.dequeue())
console.log(queue.data)








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

class LLQueue {
  constructor() {
    this.list = null
  }

  enqueue(value) {
    if (this.list)
      this.list.append(value)
    else
      this.list = new LinkedList(value)
  }

  dequeue() {
    if (!this.list)
      return undefined

    const node = this.list.head
    if (this.list.head.next) {
      this.list.head = this.list.head.next
    } else {
    }
    return node.value
  }

  print() {
    this.list.print()
  }
}

console.log('linked list queue')

const llq = new LLQueue()
llq.enqueue('oh')
llq.enqueue('well')
llq.enqueue('hello')
llq.enqueue('world')

console.log(llq.dequeue())
console.log(llq.dequeue())

llq.enqueue('!')

console.log(llq.dequeue())

llq.print()
