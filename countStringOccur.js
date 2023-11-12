function strOccur(text, word) {
  let sentence = text.split(` `);
  let count = 0;

  for (let i of sentence) {
    if (i === word) {
      count++;
    }
  }

  console.log(count);
}

strOccur('This is a word and it also is a sentence', 'is');