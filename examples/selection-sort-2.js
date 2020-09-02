function selection(input) {
  for (let i = 0; i < input.length; i += 1) {
    let smallestIndex = i
    for (let j = i + 1; j < input.length; j += 1) {
      if (input[j] < input[smallestIndex]) {
        smallestIndex = j
      }
    }

    let temp = input[i]
    input[i] = input[smallestIndex]
    input[smallestIndex] = temp
  }

  return input
}

const starter = [6,5,3,1,8,7,2,4,0]
console.log(selection(starter.slice()))
