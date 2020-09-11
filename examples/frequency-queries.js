function frequencyQueries(queries) {
  const numbers = new Map()
  const occurrences = new Map()
  const output = []

  for(let i = 0; i < queries.length; i += 1) {
    const op = queries[i][0]
    const val = queries[i][1]

    switch (op) {
      case 1 : { // add
        let num = (numbers.get(val) || 0) + 1
        numbers.set(val, num)

        let oldOccurrence = occurrences.get(num - 1)
        if (oldOccurrence && oldOccurrence === 1) {
          occurrences.delete(num - 1)
        } else if (oldOccurrence) {
          occurrences.set(num - 1, oldOccurrence - 1)
        }

        let newOccurrence = occurrences.get(num) || 0
        occurrences.set(num, newOccurrence + 1)

        break;
      }
      case 2 : { // delete
        let num = (numbers.get(val) || 0) - 1
        if (num <= 0) {
          numbers.delete(val)
        } else {
          numbers.set(val, num)
        }

        let oldOccurrence = occurrences.get(num + 1)
        if (oldOccurrence && oldOccurrence === 1) {
          occurrences.delete(num + 1)
        } else if (oldOccurrence) {
          occurrences.set(num + 1, oldOccurrence - 1)
        }

        let newOccurrence = occurrences.get(num) || 0
        occurrences.set(num, newOccurrence + 1)

        break;
      }
      case 3 : { // output
        let foundOccurrence = occurrences.get(val)
        if (foundOccurrence === undefined) output.push(0)
        else output.push(1)
        break;
      }
    }
  }
  return output
}

console.log(frequencyQueries(
  [
    [1,1],
    [2,2],
    [3,2],
    [1,1],
    [1,1],
    [2,1],
    [3,2],
  ]),
  '[0,1]'
)
