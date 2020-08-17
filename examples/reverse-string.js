var chalk = require('chalk');

function reverseUsingBuiltIn(str) {
  const orig = str.split('');

  return orig.reverse().join('');
}

function reverseUsingNaiveLoop(str) {
  const reversed = new Array(str.length);
  for (let i = 0; i < str.length; i += 1) {
    reversed[str.length - i] = str[i];
  }
  return reversed.join('');
}

function reverseUsingNaiveLoopAndPush(str) {
  const reversed = [];
  const stringLength = str.length - 1;
  for (let i = stringLength; i >= 0; i -= 1) {
    reversed.push(str[i]);
  }
  return reversed.join('');
}

function reverseUsingSwap(str) {
  const reversed = new Array(str.length);
  for (let i = 0; i < str.length / 2; i += 1) {
    reversed[i] = str[str.length - 1 - i];
    reversed[str.length - 1 - i] = str[i];
  }
  return reversed.join('');
}

function reverseUsingExOr(str) {
  return str;
}

function reverseInPlace(str) {
  const arr = str.split('');
  for (let i = 0; i < arr.length / 2; i += 1) {
    const left = arr[i];
    arr[i] = arr[arr.length -1 - i];
    arr[arr.length -1 - i] = left;
  }
  return arr.join('');
}

function reverseUsingReduce(str) {
  let pos = str.length - 1;
  const orig = str.split('');
  return orig.reduce(curr => {
    curr += orig[pos];
    pos -= 1;
    return curr;
  }, '');
}

const testWith = input => func => {
  const expected = reverseUsingBuiltIn(input);
  const result = func(input);
  const passed = result === expected;
  console.log(
    func.name,
    passed
      ? chalk.green('passed')
      : chalk.red('failed') + `: expected: ${expected}, received: ${result}`
  );
};

const testWith3Letters = testWith('abc');
const testWith4Letters = testWith('abcd');
const testWithAndrei = testWith('Hi My name is Andrei');

testWith3Letters(reverseInPlace);
testWith4Letters(reverseInPlace);
testWithAndrei(reverseUsingBuiltIn);
testWithAndrei(reverseUsingNaiveLoop);
testWithAndrei(reverseUsingNaiveLoopAndPush);
testWithAndrei(reverseUsingSwap);
testWithAndrei(reverseInPlace);
testWithAndrei(reverseUsingExOr);
testWithAndrei(reverseUsingReduce);
