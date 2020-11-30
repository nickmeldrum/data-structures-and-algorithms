const chalk = require('chalk')

const log = (colour, logType) => msg => console[logType](chalk[colour](msg))
const logInfo = log('blue', 'log')
const logSuccess = log('green', 'log')
const logError = log('red', 'error')

logInfo('Reverse words in a string:')

class Words {
  constructor() {
    this.words = []
  }

  addWord(currentWord) {
    if (currentWord.length > 0) {
      this.words.push(currentWord)
    }
  }

  reverse() {
    let output = ''
    for (let i = this.words.length - 1; i >= 0; i -= 1) {
      output += this.words[i]
      if (i !== 0) {
        output += ' '
      }
    }
    return output
  }
}

const reversewords = function(s) {
  const words = new Words()
  let currentWord = ''
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === ' ') {
      words.addWord(currentWord)
      currentWord = ''
    } else {
      currentWord += s[i]
    }
  }
  words.addWord(currentWord)
  
  return words.reverse()
}


let exitCode = 0
const test = (func, input, expected) => {
  const output = func(input)
  if (output === expected) {
    logSuccess(`output: '${output}' was expected, yay.`)
  } else {
    logError(`output: '${output}' was not expected value: '${expected}', boo.`)
    exitCode = 1
  }
}

test(reversewords, 'hi there', 'there hi')
test(reversewords, '  the    sky is blue   ', 'blue is sky the')

process.exit(exitCode)
