function sockMerchant(n, ar) {
  const colors = new Map()
  let pairs = 0

  for(let sock of ar) {
    if (colors.get(sock) !== undefined) {
      pairs += 1
      colors.delete(sock)
    } else {
      colors.set(sock, sock)
    }
  }
  return pairs
}


const x = sockMerchant(0, [10, 20, 20, 10, 10, 30, 50, 10, 20])

console.log(x)
