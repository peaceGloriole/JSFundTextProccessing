function pascalCase(str) {
  let words = str.split(/(?=[A-Z])/).join(', ');
  console.log(words);
}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
