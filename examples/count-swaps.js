function countSwaps(a) {
  let swaps = 0
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
        if (a[j] > a[j + 1]) {
          swaps = swaps + 1
          swap(a, j, j + 1)
        }
    }
  }

  console.log(`Array is sorted in ${swaps} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length - 1]}`)
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


countSwaps([1,3,5,4,2])
