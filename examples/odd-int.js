function findOdd(A) {
  if (!(Array.isArray(A))) {
    return 0;
  }
  const counts = {};

  A.forEach(item => {
    counts[item] = counts[item] === undefined
      ? counts[item] = 1
      : counts[item] += 1;
  });

  for(count in counts) {
    if (counts[count] % 2 !== 0) {
      return parseInt(count, 10);
    }
  }

  return 0;
}

function doTest(a, n) {
  console.log(findOdd(a), n, findOdd(a) === n);
}

doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
doTest([10], 10);
doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
