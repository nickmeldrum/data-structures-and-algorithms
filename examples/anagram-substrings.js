console.log('anagram substrings')

function sherlockAndAnagrams(s) {
  const m = new Map()
  let count = 0
  for(let i = 0; i < s.length; i += 1) {
    for (let j = i + 1; j < s.length + 1; j += 1) {
      const sorted = s.slice(i, j).split('').sort().join()
      const existing = m.get(sorted)
      m.set(sorted, existing === undefined ? 0 : existing + 1)
    }
  }
  m.forEach(value => {
    const um = (value * (value + 1)) / 2
    count += um
  })
  return count
}

console.log(sherlockAndAnagrams(
  'cdcd'),
  5
)

console.log(sherlockAndAnagrams(
  'abba'),
  4
)

console.log(sherlockAndAnagrams(
  'abcd'),
  0
)

console.log(sherlockAndAnagrams(
  'ifailuhkqq'),
  3
)


