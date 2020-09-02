function bubble(input) {
  let noBubbles = false
  let iterations = 0
  while (!noBubbles) {
    noBubbles = true
    for (let i = 0; i < input.length - 1; i += 1) {
      iterations += 1
      const left = input[i]
      const right = input[i + 1]

      if (left > right) {
        noBubbles = false
        input[i] = right
        input[i + 1] = left
      }
    }
  }

  console.log('bubble', iterations)
  return input
}

function bubble2(input) {
  let iterations = 0
  for (let j = 0; j < input.length; j += 1) {
    for (let i = 0; i < input.length - 1; i += 1) {
      iterations += 1
      const left = input[i]
      const right = input[i + 1]

      if (left > right) {
        input[i] = right
        input[i + 1] = left
      }
    }
  }

  console.log('bubble2', iterations)
  return input
}

const starter = [6,5,3,1,8,7,2,4,0]
console.log(bubble(starter.slice()))

const next = [99,44,6,2,1,5,63,87,283,4,0]
console.log(bubble(next.slice()))
console.log(bubble2(next.slice()))
