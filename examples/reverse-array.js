// reverse an array
const { performance } = require('perf_hooks')

const reverse = array => {
  for (let i = 0; i < array.length / 2; i += 1) {
    const x = array[i]
    array[i] = array[array.length - i]
    array[array.length - i] = x
  }
}

const makeArray = length => [...Array(length + 1).keys()].slice(1)

module.exports = () => {
  const arr = makeArray(4)

  let before
  let after

  before = performance.now()
  console.log(arr)
  reverse(arr)
  console.log(arr)
  after = performance.now()
  console.log(`naive reverse = ${after - before}`)
}
