function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
  let head
  const calcNextNode = (a1, n1, n2, remainder = 0) => {
    const value = n1.val + n2.val + remainder
    const thisUnit = value % 10
    console.log('um', a1)
    if (a1 === null) {
        head = ListNode(thisUnit)
        a1 = head
    } else {
        a1.next = ListNode(thisUnit)
        a1 = a1.next
    }

    if (n1.next === null) return;

    calcNextNode(a1, n1.next, n2.next, (value >= 10) ? 1 : 0)
  }

  calcNextNode(null, l1, l2)

  return head
};

const a1 = [2,4,3], a2 = [5,6,4];
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

const expectedOutput = [7,0,8];

addTwoNumbers(l1, l2).print()
console.log(expectedOutput)
