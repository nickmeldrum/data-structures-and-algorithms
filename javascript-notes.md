# JavaScript notes:


## Arrays

safe way to see if something is an array?

TL/dr: `Array.isArray()`

Other options (usually faster):

`x instanceof Array`
`x.constructor === Array`

Problem with these: what if the variable was created in a different domain (i.e. in an iFrame) to the current one that Array object is referenced?

cite: http://web.mit.edu/jwalden/www/isArray.html

## Numbers

how to safely know if something is a number?

how to safely know if something is an integer?

no such thing as an integer in javascript!


## Sets and Maps

set = only unique items

methods: add, delete, has, entries, forEach
props: size

Map = hashtable

methods: get, set, has, delete, entries, keys, values, forEach
props: size

