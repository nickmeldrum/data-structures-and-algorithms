const usingTemp = (a, b) => {
  console.log('using temp variables')

  console.log(a, b)
  const c = a
  a = b
  b = c
  console.log(a, b)
}

const usingAddition = (a, b) => {
  console.log('using addition')

  console.log(a, b)
  a = a + b
  b = a - b
  a = a - b
  console.log(a, b)
}

const usingBitwise = (a, b) => {
  console.log('using bitwise')

  console.log(a, b)
  a = a ^ b
  b = a ^ b
  a = a ^ b
  console.log(a, b)
}

const usingDestructuring = (a, b) => {
  console.log('using destrucuring')

  console.log(a, b)
  ;[a, b] = [b, a]
  console.log(a, b)
}

module.exports = () => {
  usingTemp(42, 90)
  usingAddition(42, 90)
  usingBitwise(42, 90)
  usingDestructuring(42, 90)
}
