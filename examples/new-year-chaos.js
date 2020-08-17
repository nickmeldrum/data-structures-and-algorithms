console.log('new year chaos')

function minimumBribes(input) {
  let bribes = 0
  for (let i = 0; i < input.length; i += 1) {
    let thisBribe = (input[i] - 1) - i
    if (thisBribe > 2) {
      return 'Too chaotic'
    }
    if (thisBribe > 0) {
      bribes += thisBribe
    }
  }
  return bribes
}

console.log(minimumBribes([2,1,5,3,4]))
console.log(minimumBribes([1,2,5,3,7,8,6,4]))
