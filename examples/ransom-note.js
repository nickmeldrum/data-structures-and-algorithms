console.log('ransom note')

/*
 * magazine: an array of strings, each a word in the magazine
 * note: an array of strings, each a word in the ransom note
 */

function ransomNote(magazine, note) {
  const magazineItems = new Map()
  for(let i = 0; i < magazine.length; i += 1) {
    const number = magazineItems.get(magazine[i])
    magazineItems.set(
      magazine[i], 
      number ? number + 1 : 1
    )
  }

  for(let i = 0; i < note.length; i += 1) {
    const magItem = magazineItems.get(note[i])
    if (magItem === undefined || magItem === 0) {
      return 'No'
    }
    magazineItems.set(note[i], magItem - 1)
  }

  return 'Yes'
}

console.log(ransomNote(
  'give me one grand today night'.split(' '),
  'give one grand today'.split(' ')),
  'Yes'
)

console.log(ransomNote(
  'I have a cunning plan'.split(' '),
  'I have a cunning plan'.split(' ')),
  'Yes'
)

console.log(ransomNote(
  'I have a cunning plan'.split(' '),
  'I have a cunning'.split(' ')),
  'Yes'
)

console.log(ransomNote(
  'I have a cunning plan'.split(' '),
  'i have a cunning plan'.split(' ')),
  'No'
)

console.log(ransomNote(
  'I have a cunning plan'.split(' '),
  'I have a cunning plan plan'.split(' ')),
  'No'
)

console.log(ransomNote(
  'I have a cunning plan plan plan'.split(' '),
  'I have a cunning plan plan'.split(' ')),
  'Yes'
)
