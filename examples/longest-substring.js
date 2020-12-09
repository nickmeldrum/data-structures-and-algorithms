const chalk = require('chalk');
// Longest Substring with At Least K Repeating Characters
// https://leetcode.com/explore/featured/card/november-leetcoding-challenge/567/week-4-november-22nd-november-28th/3544/

function longestSubString(s, k) {
  // first ignore k

  let currentLongest = ''
  let leftOfWindow = 0
  const charSet = new Set()
 
  for (let rightOfWindow = 0; rightOfWindow < s.length; rightOfWindow += 1) {
    if (charSet.has(s[rightOfWindow])) {
      charSet.delete(s[leftOfWindow])
      leftOfWindow += 1
    } else {
      charSet.add(s[rightOfWindow])
      rightOfWindow += 1
    }
    
    console.log(`
      leftOfWindow: ${leftOfWindow}, rightOfWindow: ${rightOfWindow},
      charSet.size: ${charSet.size}, currentLongest: ${currentLongest},
      charSert[0]: ${charSet[0]}, charSet[1]: ${charSet[1]},
      s: ${s},
    `)

    if (rightOfWindow - leftOfWindow + 1 > currentLongest.length) {
      currentLongest = s.substring(leftOfWindow, rightOfWindow - leftOfWindow + 1)
    }
  }

  return currentLongest
}

const testWith = (s, k, expected) => {
  const result = longestSubString(s, k);
  const passed = result === expected;
  console.log(
    passed
      ? chalk.green('passed')
      : chalk.red('failed') + `: expected: ${expected}, received: ${result}`
  );
};

testWith('aaabb', 3, 3)
// testWith('ababbc', 2, 5)

