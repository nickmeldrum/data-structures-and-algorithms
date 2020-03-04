Big O:
describes the long-term growth rate of functions

linear time
O(n)
i.e. the time it takes to complete increases at the same rate as the number of inputs

O(1)
constant time
i.e. it will always take the same time irrespective of number of inputs

Worst case:

exact Big O notation will count operations and could end up wth notation like: O(3 + 4n) for example, but in general usually we are only concerned with the worst case type of Big O. Therefore we would simplify O(3 + 4n) to O(n).

In the big scheme of things, Big O only cares about worst case. Even if in a O(n) function we break out early when the computation is complete, we don't count that - we assume worst case.

Remove constants: because we are only concerned with the growth rate of functions, the constants don't really matter

BUT: different inputs create different notations, therefore looping through 2 inputs would be denoted as O(a + b)

algorithms:

swap integers without using a temp variable 

log all pairs of arrays

