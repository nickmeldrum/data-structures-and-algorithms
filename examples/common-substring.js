console.log('common substring')

function commonSubstring(a, b) {
  const set = new Set()
  let toCheck

  if (a < b) {
    Array.from(a).forEach(c => set.add(c))
    toCheck = b
  } else {
    Array.from(b).forEach(c => set.add(c))
    toCheck = a
  }

  for(let i = 0; i < toCheck.length; i += 1) {
    if (set.has(toCheck[i])) {
      return 'YES'
    }
  }

  return 'NO'
}

console.log(commonSubstring(
  'abcdgooberballs',
  'goober'),
  'YES')

console.log(commonSubstring(
  'abcd',
  'ebf'),
  'YES')

console.log(commonSubstring(
  'kingprawns',
  'zzzzzzzzzz'),
  'NO')
