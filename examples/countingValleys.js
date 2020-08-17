function countingValleys(route) {
  let height = 0
  let inValley = false
  let numberOfValleys = 0

  for(let step of route) {
    if (step === 'U') {
      height += 1
      if (height === 0 && inValley) {
        inValley = false
        numberOfValleys += 1
      }
    }
    else {
      if (height === 0) {
        inValley = true
      }
      height -= 1
    }
  }
  return numberOfValleys
}

const input = 'UDDDUDUU'

const x = countingValleys(input)

console.log(x)
