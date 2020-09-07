function numberOfAsSlow(s, n) {
  let count = 0
  
  for(let i = 0; i < n; i += 1) {
    let index = [i % s.length]
    if (s[i % s.length] === 'a') count += 1
  } 
  
  return count
}

function numberOfAs(s, n) {
  const countInString = to => {
    let count = 0
    for(let i = 0; i < to; i += 1) {
      if (s[i] === 'a') count += 1
    } 
    return count
  }
  
  let countWithoutRemainder = countInString(s.length) * parseInt(n / s.length, 10)
  let countInRemainder = countInString(n % s.length)
  
  return countWithoutRemainder + countInRemainder
}

console.log(numberOfAs('aba', 10), 7)
console.log(numberOfAs('a', 1000), 1000)
console.log(numberOfAs('a', 10000000000), 10000000000)
