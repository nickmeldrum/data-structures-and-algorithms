function insertion(input) {
  for (let i = 1; i < input.length; i += 1) {
    const itemToInsert = input[i]

    if (itemToInsert < input[i - 1]) {
      insertIntoArray(input, i)
    }
  }

  return input
}

function insertIntoArray(input, indextoInsert) {
  for (let i = 0; i < indextoInsert; i += 1) {
    if(input[indextoInsert] < input[i]) {
      input.splice(i, 0, input[indextoInsert])
      input.splice(indextoInsert + 1, 1)
    }
  }
}

const starter = [6,5,3,1,8,7,2,4,0]
console.log(starter)
console.log(insertion(starter))
