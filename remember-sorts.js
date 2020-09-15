/********************/
/* helper functions */
const input = [40,4,1,3,10000,100,9,8,0]
const printableArray = a => a.join(',')
const printArray = a => console.log(printableArray(a))
const run = func => console.log(`${func.name} = "${printableArray(func(input.slice(0)))}"`)
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
console.log(`input = "${printableArray(input)}"`)
/* helper functions */
/********************/

function bubbleSort(a) {
  for(let i = 0; i < a.length; i += 1) {
    for(let j = 0; j < a.length - 1; j += 1) {
      if (a[j + 1] < a[j]) {
        swap(a,j,j+1)
      }
    }
  }

  return a
}
run(bubbleSort)
// keep looping through swapping adjacent items until no exchanges necessary
// O(n^2) - slow
// in place - space = 0(1)
// stable, comparison, exchange

function insertionSort(a) {
  for(let i = 1; i < a.length; i += 1) {
    if (a[i] < a[i - 1]) {
      for (let j = 0; j < i; j += 1) {
        if (a[i] < a[j]) {
          a.splice(j, 0, a[i])
          a.splice(i + 1, 1)
        }
      }
    }
  }
  return a
}
run(insertionSort)
// take elements 1 by 1 inserting them into correct place in new list
// worse case: O(n^2)
// O(1) if in place
// unstable, comparison, insertion

function findMinValue(a, remainder) {
    let minValue = Number.MAX_VALUE
    let minIndex = undefined
    for (let i = remainder; i < a.length; i += 1) {
      if (a[i] < minValue) {
        minValue = a[i]
        minIndex = i
      }
    }
    return minIndex
}

function selectionSort(a) {
  for (let remainder = 0; remainder < a.length - 1; remainder += 1) {
    const minIndex = findMinValue(a, remainder)
    swap(a, minIndex, remainder)
  }
  return a
}
run(selectionSort)
// find min value - swap it with value in 1st position. do for remainder of list
// worst case: O(n^2) - useful only if swapping is expensive as will do no more than n swaps
// in place, O(1) space
// unstable generally, comparison, selection

function merge(a, b) {
  let aPointer = 0
  let bPointer = 0
  let merged = []

  for (let i = 0; i < a.length + b.length; i += 1) {
    if (b[bPointer] === undefined || a[aPointer] < b[bPointer]) {
      merged.push(a[aPointer])
      aPointer += 1
    } else {
      merged.push(b[bPointer])
      bPointer += 1
    }
  }
  return merged
}

function mergeSort(a) {
  if (a.length <= 1) return a

  const middle = Math.floor(a.length / 2)

  return merge(
    mergeSort(a.slice(0, middle)),
    mergeSort(a.slice(middle))
  )
}
run(mergeSort)
// divide & conquer - compare and swap every 2 elements, then merge 2 into 4, 4into 8 until whole list merged
// worse case: O(n log n)
// space: O(n) not in place
// stable, comparison, merging

function choosePivot(a) {
  return Math.floor(a.length / 2)
}
function sort(pivot, a) {
  let currentPivotIndex = pivot
  let leftIndex = 0
  while (leftIndex < currentPivotIndex) {
    if (a[leftIndex] < a[currentPivotIndex]) {
      leftIndex += 1
    } else {
      const toMoveRight = a[leftIndex]
      a[leftIndex] = a[currentPivotIndex - 1]
      a[currentPivotIndex - 1] = a[currentPivotIndex]
      a[currentPivotIndex] = toMoveRight
      currentPivotIndex -= 1
    }
  }
}

function quickSort(a) {
  const pivot = choosePivot(a)

  if (a.length <= 1) return a

  sort(pivot, a)

  const left = a.slice(0, pivot)
  const right = a.slice(pivot)

  const sortedLeft = quickSort(left)
  const sortedRight = quickSort(right)

  console.log('splitting', pivot, printableArray(left), '*', printableArray(right))
  console.log('sorted', pivot, printableArray(sortedLeft), '*', printableArray(sortedRight))

  return quickSort(left).concat(quickSort(right))
}
run(quickSort)
// divide and conquer: pick a pivot and move all lesser items to the left and greater to the right. Then sort these sublists
// worst case: O(n log n)
// space: usually in place, with O(n) stack space
// unstable, comparison, partitioning
