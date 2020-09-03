console.log('pdf')

/*
 * all letters 1mm wide
 * given letter heights
 * determine area of rectangle
 */

function rectangleHeight(h, word) {
  // first get largest h (for word)
  // get length of word
  // return largest h * length
  //
  let largestH = 0
  for (let i = 0; i < word.length; i += 1) {
    const height = h[word.charCodeAt(i) - 97] 
    if (height > largestH) largestH = height
  }

  return largestH * word.length
}

const hInput = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,]
const wordInput = 'abc'

console.log(rectangleHeight(hInput, wordInput))


const hInput2 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,]
const wordInput2 = 'zaba'

console.log(rectangleHeight(hInput2, wordInput2))
