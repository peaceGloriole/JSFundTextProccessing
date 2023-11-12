function replaceRepeatingChars(str) {
  let noRepeat = ``;
  let currChar = ``;

  for (let els of str) {
    if (els !== currChar) {
      noRepeat += els;
      currChar = els;
    }
  }

  console.log(noRepeat);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');