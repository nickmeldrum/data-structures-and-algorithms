console.log('hunger')

const hunger = (p, f) => {
  for (let i = 0; i < f.length; i += 1) {
    const currentScoreCheck = p[0] = f[i]

    for (let j = 0; j < f.length; j += 1) {
    }
  }

  return hungerMatrix.matrix
}

const people = [
  { name: 'john', hunger: 4, },
  { name: 'sally', hunger: 5, },
  { name: 'george', hunger: 7, },
  { name: 'clare', hunger: 2, },
]

const food = [
  { name: 'sandwich', satiation: 2, },
  { name: 'salad', satiation: 3, },
  { name: 'souffle', satiation: 4, },
  { name: 'soup', satiation: 5, },
  { name: 'sausages', satiation: 6, },
  { name: 'meatballs', satiation: 7, },
  { name: 'cottage pie', satiation: 8, },
  { name: 'lasagne', satiation: 9, },
]

const answer = hunger(people, food)

console.log('answer', answer)
