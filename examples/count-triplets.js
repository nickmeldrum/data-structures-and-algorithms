console.log('count triplets')

function countTriplets(arr, r) {
  const map = new Map()
  // loop through array
  //
  //      element could be beginning of a triplet,
  //      so add next value to search for in map as key, with
  //      the beginning of hte triplet array as value
  //
  //      search the map to see if element is a continuation of a triplet
  //      if found, add the next value (current * r) to map with the building up of the arrays
  //
  //      NB: could be multiple so value must be array of triplet arrays
  //
  //
  for (let i = 0; i < arr.length; i += 1) {
    const index = 0
    const value = arr[i]
    const hashKey = value
    const nextHashKey = value * r

    const hashValue = map.get(hashKey)
    const nextHashValue = map.get(nextHashKey)

    if (hashValue === undefined) hashValue = []

    hashValue.forEach(arr => {

    })

    hashValue.push([index])
    map.set(nextHashKey, hashValue)
  }

  // loop through map values counting full triplet arrays and return count
  let count = 0
  map.forEach(values => {
    values.forEach(possibleTriplet => {
      if (possibleTriplet.length === 3) count += 1
    })
  })
  return count
}

console.log(countTriplets(
  [1,4,16,64],
  4),
  2
)

console.log(countTriplets(
  [1, 3, 9, 9, 27, 81],
  3),
  6
)
