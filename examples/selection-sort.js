const { performance } = require('perf_hooks')

const selectionSort = array => {
  for (let i = 0; i < array.length; i += 1) {
    let smallestNumber = Infinity
    for (let j = i; j < array.length; j += 1) {
      if (array[j] < smallestNumber) {
        smallestNumber = array[j]

        let x = array[i]
        array[i] = array[j]
        array[j] = x
      }
    }
  }

  return array
}

module.exports = () => {
  const unsorted = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

  let before
  let after

  console.log(unsorted)
  before = performance.now()
  const sorted = selectionSort(unsorted)
  after = performance.now()
  console.log(sorted)
  console.log(`selection sort = ${after - before}`)
}
