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

const addTwoNumbers = function(l1, l2) {
  let answer
  const calcNextNode = (n1, n2, remainder = 0) => {
    const value = n1.value + n2.value + remainder
    const thisUnit = value % 10
    if (!answer) {
      answer = new LinkedList(thisUnit)
    } else {
      answer.append(thisUnit)
    }

    if (n1.next === null) return;

    calcNextNode(n1.next, n2.next, (value >= 10) ? 1 : 0)
  }

  calcNextNode(l1.head, l2.head)

  return answer
};

const a1 = [2,4,3], a2 = [5,6,4];
const l1 = new LinkedList(a1[0])
l1.append(a1[1])
l1.append(a1[2])
const l2 = new LinkedList(a2[0])
l2.append(a2[1])
l2.append(a2[2])

const expectedOutput = [7,0,8];

addTwoNumbers(l1, l2).print()
console.log(expectedOutput)
