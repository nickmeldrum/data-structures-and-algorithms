class HashTable {
  constructor(size) {
    this.data = new Array(size)
    this._keys = []
  }

  _hash(key) {
    if (key === 'boples') key = 'apples'
    let hash = 0;
    for (let i = 0; i < key.length; i += 1) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    const pos = this._hash(key)

    if(!this.data[pos]) {
      this.data[pos] = [];
    }
    this.data[pos].push({key, value })
    this._keys.push(key)
  }

  get(key) {
    for (let x of this.data[this._hash(key)]) {
      if (x.key === key) return x.value
    }

    return null
  }

  keys() {
    const keys = []
    for (let x of this.data) {
      if (x)
        for (let y of x) {
          keys.push(y.key)
        }
    }
    return keys
  }

  * keysGenerator() {
    for (let x of this.data) {
      if (x)
        for (let y of x) {
          yield y.key
        }
    }
  }

  betterKeys() {
    return this._keys
  }
}

const myHT = new HashTable(50)
myHT.set('oranges', 3)
myHT.set('grapes', 10000)
myHT.set('apples', 64)
myHT.set('boples', 63)

console.log(myHT.data)
console.log('grapes', myHT.get('grapes'))
console.log('apples', myHT.get('apples'))
console.log('boples', myHT.get('boples'))

console.log(myHT.keys())
console.log(myHT.betterKeys())

for(let x of myHT.keysGenerator()) {
  console.log(x)
}
