Big O:
describes the long-term growth rate of functions

O(1) constant time:
i.e. it will always take the same time irrespective of number of inputs

O(log N) Logarithmic:
typically sorted (binary search) searching algorithms

O(n) linear time:
i.e. the time it takes to complete increases at the same rate as the number of inputs

O(n * log(n)) Log linear:
usually sorting ops

O(n^2) Quadratic:
2 nested loops - every el needs to compare to every other el

O(2^n) Exponential:
recursive algorithms that solve problem of size N

O(n!) Factorial:
adding a loop for every element!

Worst case:

exact Big O notation will count operations and could end up wth notation like: O(3 + 4n) for example, but in general usually we are only concerned with the worst case type of Big O. Therefore we would simplify O(3 + 4n) to O(n).

In the big scheme of things, Big O only cares about worst case. Even if in a O(n) function we break out early when the computation is complete, we don't count that - we assume worst case.

Remove constants: because we are only concerned with the growth rate of functions, the constants don't really matter

BUT: different inputs create different notations, therefore looping through 2 inputs would be denoted as O(a + b)

nested loops rule of thumb: = multiplication of growth rates:
i.e. 1 nested loop of same input would = O(n^2)

rules of thumb - same indentation = add, nested indentation = multiply

Drop Non Dominants: an extension of worst case - simplify O(n + n^2) to O(n^2) as n^2 is more significant in terms of time. The less significant terms drop effectively to 0 for very large numbers.
