console.log('list')

function insertNodeAtPosition(head, position, nodeValue) {
  let previous = head
  let current = head
  for (let i = 0; i < position; i += 1) {
    previous = current
    current = current.next
  }

  const newNode = { value: nodeValue, next: current }
  previous.next = newNode

  return head
}

const d = { value: 'd', next: null }
const b = { value: 'b', next: d }
const a = { value: 'a', next: b }


function showList(head) {
  let result = `${head.value}`
  let current = head
  while (current.next) {
    current = current.next
    result += current.value
  }
  return result
}

console.log('original', showList(a))
console.log('new', showList(insertNodeAtPosition(a, 2, 'c')))
