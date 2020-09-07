function hourglassSum(c) {
  let largestSum = 0
  
  for(let i = 0; i < c.length - 2; i += 1) {
    for(let j = 0; j < c[0].length - 2; j += 1) {
      let sum = c[i][j] + c[i][j + 1] + c[i][j + 2] + c[i + 1][j + 1] + c[i + 2][j] + c[i + 2][j + 1] + c[i + 2][j + 2]
      if (sum > largestSum) largestSum = sum
    }
  }
  return largestSum
}

let input = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0],
]


console.log(hourglassSum(input), 19)
