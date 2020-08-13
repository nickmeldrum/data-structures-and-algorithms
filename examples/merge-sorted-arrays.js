// merge sorted arrays
const { performance } = require('perf_hooks')

const merge = (a, b) => {
  const merged = new Array(a.length + b.length)

  let aCurrentIndex = 0
  let bCurrentIndex = 0

  for (let i = 0; i < a.length + b.length; i += 1) {
    if (a[aCurrentIndex] < b[bCurrentIndex] || !b[bCurrentIndex]) {
      merged[i] = a[aCurrentIndex]
      aCurrentIndex += 1
    } else {
      merged[i] = b[bCurrentIndex]
      bCurrentIndex += 1
    }
  }

  return merged
}

const doit = () => {
  const arr1 = [0, 3, 4, 78]
  const arr2 = [4, 6, 30, 31, 45, 51]

  let before
  let after

  console.log(arr1, arr2)
  before = performance.now()

  const merged = merge(arr1, arr2)

  after = performance.now()
  console.log(merged)
  console.log(`merge = ${after - before}`)
}

doit();
