package test.helper;

import java.util.function.Function;

public class Test<T, R> {
  private final Output out;

  public Test() {
    out = new Output();
  }

  public void test(Function<T, R> func, T input, R expected) {
    out.printBlueLine("Testing with input: %s", input);
    var output = func.apply(input);
    if (expected.equals(output)) {
      out.printGreenLine("Test succeeded!");
    } else {
      out.printRedLine("Test failed. Expected: %s, Received: %s", expected, output);
    }
  }
}
