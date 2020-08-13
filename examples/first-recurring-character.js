const input = [2,5,1,2,3,5,1,2,4]

console.log("find first recurring character:")

const findIt = arr => {
  const remember = new Map()

  for(let element of arr) {
    if (remember.get(element) !== undefined)
      return element
    remember.set(element, element)
  }
}

const result = findIt(input)

console.log("answer", result)
console.log("answer2", findIt([2,1,1,2,3,5,1,2,4]))
console.log("answer3", findIt([2,3,4,5]))
console.log("answer4", findIt([2,0,3,4,0,5]))


