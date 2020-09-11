function maximumToys(prices, budget) {
  prices.sort((a, b) => (a === b) ? 0 : (a < b) ? -1 : 1)

  let cost = 0
  let i = 0
  while (cost < budget) {
    cost += prices[i]
    i += 1
  }

  return i - 1
}

console.log(maximumToys(
  [1,2,3,4],
  7,
), 3)


console.log(maximumToys(
[1, 12, 5, 111, 200, 1000, 10],
  50,
), 4)
