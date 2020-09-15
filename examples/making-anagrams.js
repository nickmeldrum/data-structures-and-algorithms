function makingAnagrams(a, b) {
  const characterMap = new Map()
  for (let i = 0; i < a.length; i += 1) {
    const current = characterMap.get(a[i])
    characterMap.set(a[i], (current === undefined) ? 1 : current + 1)
  }

  let count = 0
  for (let i = 0; i < b.length; i += 1) {
    const current = characterMap.get(b[i])
    if (current === undefined) {
      count += 1
    } else {
      if (current === 1) {
        characterMap.delete(b[i])
      } else {
        characterMap.set(b[i], current - 1)
      }
    }
  }

  characterMap.forEach(v => {
    count += v
  })

  return count
}


console.log(makingAnagrams(
  'aaabcd',
  'abbcde',
  4))
