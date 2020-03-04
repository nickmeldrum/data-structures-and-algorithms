// reverse an array
const { performance } = require('perf_hooks')

const reverse = array => {}

const makeArray = length => [...Array(length + 1).keys()].slice(1)

module.exports = () => {
  const arr = makeArray(100)

  let before
  let after

  before = performance.now()
  reverse(arr)
  after = performance.now()
  console.log(`naive reverse = ${after - before}`)
}
