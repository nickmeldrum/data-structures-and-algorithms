console.log('left rotation')

function rotLeft(input, rotations) {
  const output = []
  for(let i = rotations; i < input.length; i += 1) {
    output.push(input[i])
  }
  for(let j = 0; j < rotations; j += 1) {
    output.push(input[j])
  }
  return output
}

console.log(rotLeft([1,2,3,4,5], 2))
