const factorial = num => num === 0 ? 1 : factorial(num - 1) * num

console.log(factorial(4))
console.log(factorial(5))

const fibonacciIterative = num => {
  let morePrevious = 0
  let previous = 1
  let current = 1
  let wasCurrent = 1

  for (let i = 1; i < num; i += 1) {
    wasCurrent = 1
    current = previous + morePrevious
    morePrevious = previous
    previous = current
  }
  return current
}

const fibonacciRecursive = (num, current = 1) => {
  if (current
  return fibonacciRecursive(num)
}

console.log(fibonacciIterative(5))
console.log(fibonacciRecursive(5))
