import java.util.Arrays;
import java.util.HashMap;
import java.util.function.Function;

import test.helper.Test;

// run with:
// nodemon -e .java -x "javac MatchingSocks.java test/helper/*.java && java MatchingSocks" 
//
class MatchingSocks {
  private static Function<Integer[], Integer> matchSocks = input -> {
    var map = new HashMap<Integer, Integer>();
    for (var i = 0; i < input.length; i += 1) {
      int count = (!map.containsKey(input[i]))
        ? 1
        : map.get(input[i]) + 1;
      map.put(input[i], count);
    }

    var matches = 0;
    for(Integer value : map.values()) {
      int match = value / 2;
      matches += match;
    }

    return matches;
  };

  public static void main (String[] args) {  

    Test<Integer[], Integer> tester = new Test<Integer[], Integer>();

    tester.test(matchSocks, new Integer[] { 1, 2, 1, 2, 1, 3, 2 }, 2);
    tester.test(matchSocks, new Integer[] { 1, 1, 3, 1, 2, 1, 3, 3, 3, 3 }, 4);
  }
}
