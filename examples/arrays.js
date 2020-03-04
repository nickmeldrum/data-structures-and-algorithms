// How do you find the missing number in a given integer array of 1 to 100
const { performance } = require('perf_hooks')

const missingNumberNaiveLoop = array => {
  array.forEach((el, index) => {
    if (!el) console.log('using naive loop: missing: ' + (index + 1))
  })
}

const missingNumberMaths = array => {
  const sum = array.reduce((cur, next) => cur + (next || 0), 0)
  const expected = array.length * ((array.length + 1) / 2)
  console.log('using maths: missing: ' + (expected - sum))
}

const makeArray = ({ length, missingNumber }) => {
  const array = [...Array(length + 1).keys()].slice(1)
  array[missingNumber - 1] = undefined
  return array
}

module.exports = () => {
  const missing14 = makeArray({ length: 10000000, missingNumber: 9999999 })

  let before
  let after

  before = performance.now()
  missingNumberNaiveLoop(missing14)
  after = performance.now()
  console.log(`naive loop = ${after - before}`)

  before = performance.now()
  missingNumberMaths(missing14)
  after = performance.now()
  console.log(`using maths = ${after - before}`)
}
