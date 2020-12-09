import java.util.function.Function;

import test.helper.Test;

// run with:
// nodemon -e .java -x "javac RepeatedString.java test/helper/*.java && java RepeatedString" 
//

class RepeatedString {
  private static Function<Input, Integer> repeatedString = input -> {
    return input.characters;
  };

  public static void main (String[] args) {  

    Test<Input, Integer> tester = new Test<Input, Integer>();

    Input input = new Input();
    input.inputString = "abab";
    input.characters = 4;

    tester.test(repeatedString, input, 2);
  }
}

class Input {
  public String inputString;
  public int characters;
}
