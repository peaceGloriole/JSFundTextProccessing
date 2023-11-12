function revealWords(wordStr, sentence) {
  let words = wordStr.split(`, `);

  for (let word of words) {
    let repeatCount = word.length;

    let starTemplate = `*`.repeat(repeatCount);
    sentence = sentence.replace(starTemplate, word);
  }

  console.log(sentence);
}

// revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');