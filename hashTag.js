function hashtag(str) {
  let text = str.split(' ');
  let hashtagWords = text.filter(el => el.startsWith(`#`) && el.length > 1);

  for (let words of hashtagWords) {
    words = words.slice(1);

    let isValid = true;
    for (let char of words) {
      if (!/[A-Za-z]/.test(char)) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      console.log(words);
    }
  }
}

hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');
