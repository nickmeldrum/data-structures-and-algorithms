// reverse an array
const { performance } = require('perf_hooks')

const reverse = array => {
  for (let i = 0; i < array.length / 2; i += 1) {
    const x = array[i]
    array[i] = array[array.length - i - 1]
    array[array.length - i - 1] = x
  }
}

const reverseNoVar = array => {
  for (let i = 0; i < array.length / 2; i += 1) {
    array[i] = array[i] + array[array.length - i - 1]
    array[array.length - i - 1] = array[i] - array[array.length - i - 1]
    array[i] = array[i] - array[array.length - i - 1]
  }
}

const makeArray = length => [...Array(length + 1).keys()].slice(1)

module.exports = () => {
  const arr = makeArray(12)

  let before
  let after

  before = performance.now()
  console.log(arr)
  reverse(arr)
  console.log(arr)
  after = performance.now()
  console.log(`naive reverse = ${after - before}`)

  const arr2 = makeArray(12)

  before = performance.now()
  console.log(arr2)
  reverseNoVar(arr2)
  console.log(arr2)
  after = performance.now()
  console.log(`reverse no var = ${after - before}`)
}
