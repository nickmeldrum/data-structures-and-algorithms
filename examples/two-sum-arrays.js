console.log(`Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.`)

const inputArray = [2, 7, 11, 15]
const inputTarget = 13
const expected = [0, 2]

console.log('expected', expected)

const twoSumsQuadratic = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }

  return []
}
console.log('quadratic', twoSumsQuadratic(inputArray, inputTarget))

const twoSums2PassLinear = (nums, target) => {
  const valueMap = new Map()
  for (let i = 0; i < nums.length; i += 1) {
    valueMap.set(nums[i], i)
  }

  for (let i = 0; i < nums.length; i += 1) {
    const indexToCheck = valueMap.get(target - nums[i])
    if (indexToCheck && i !== indexToCheck)
      return [i, indexToCheck]
  }

  return []
}
console.log('2passlinear', twoSums2PassLinear(inputArray, inputTarget))

const twoSums1PassLinear = (nums, target) => {
  const valueMap = new Map()
  for (let i = 0; i < nums.length; i += 1) {
    valueMap.set(nums[i], i)
    const indexToCheck = valueMap.get(target - nums[i])
    if (indexToCheck && i !== indexToCheck)
      return [i, indexToCheck]
  }

  return []
}
console.log('1passlinear', twoSums1PassLinear(inputArray, inputTarget))
