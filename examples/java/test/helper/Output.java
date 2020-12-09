package test.helper;

class Output {
  private static final String ANSI_RESET = "\u001B[0m";
  private static final String ANSI_BLACK = "\u001B[30m";
  private static final String ANSI_RED = "\u001B[31m";
  private static final String ANSI_GREEN = "\u001B[32m";
  private static final String ANSI_YELLOW = "\u001B[33m";
  private static final String ANSI_BLUE = "\u001B[34m";
  private static final String ANSI_PURPLE = "\u001B[35m";
  private static final String ANSI_CYAN = "\u001B[36m";
  private static final String ANSI_WHITE = "\u001B[37m";

  private void printLine(String color, String messageFormat, Object... values) {
    var message = String.format(messageFormat, values);
    System.out.println(String.format(
          "%s%s%s",
          color, message, ANSI_RESET
    ));
  }

  public void printGreenLine(String message, Object... values) {
    this.printLine(Output.ANSI_GREEN, message, values);
  }

  public void printRedLine(String message, Object... values) {
    this.printLine(Output.ANSI_RED, message, values);
  }

  public void printBlueLine(String message, Object... values) {
    this.printLine(Output.ANSI_BLUE, message, values);
  }
}
