function reverseParentheses(s) {
  while (s.includes("(")) {
    const endBracket = s.indexOf(")");
    const startBracket = s.lastIndexOf("(", endBracket);
    const reversedString = s
      .slice(startBracket + 1, endBracket)
      .split("")
      .reverse()
      .join("");
    s = s.slice(0, startBracket) + reversedString + s.slice(endBracket + 1);
  }
  return s;
}
