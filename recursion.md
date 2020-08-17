tail recursion:

from https://cs.stackexchange.com/questions/6230/what-is-tail-recursion

ensure your recursive call is the last thing the calling function does, e.g.:

func(val) {
 // do stuff
 return func(val)
}

This way, instead of maintaining each recursive call in the call stack, we know that once all the recursive functions are called we can just return to the original function so it can be optimised and remove the chance of a stack overflow.

"When we make a normal recursive call, we have to push the return address onto the call stack then jump to the called function. This means that we need a call stack whose size is linear in the depth of the recursive calls. When we have tail recursion we know that as soon as we return from the recursive call we're going to immediately return as well, so we can skip the entire chain of recursive functions returning and return straight to the original caller. "
