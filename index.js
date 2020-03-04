const fs = require('fs-extra')

let justRun
/*
 */
justRun = 'merge-sorted-arrays.js'

const runIt = filename => {
  const run = require(`./examples/${filename}`)
  console.log(`executing: ${filename}...`)
  run()
}

if (justRun) runIt(justRun)
else
  fs.readdir('./examples/').then(results => {
    results.forEach(filename => runIt(filename))
  })
