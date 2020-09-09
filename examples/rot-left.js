console.log('left rotation')

function rotLeft(array, rotation) {
  const output = array.slice()
  const add = output.splice(0, 2)
  output.push.apply(output, add)
  return output
}

function rotLeft2(array, rotation) {
  const newArray = []
  for(let i = 0; i < array.length; i += 1) {
    if (i + rotation < array.length) {
      newArray.push(array[i + rotation])
    } else {
      newArray.push(array[i - rotation - 1])
    }
  }
  return newArray
}

const sample = [1,2,3,4,5]

console.log(rotLeft(sample, 2))
console.log(rotLeft2(sample, 2))
