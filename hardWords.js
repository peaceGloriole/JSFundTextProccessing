function hardWords(arr) {
  let [text, words] = arr;

  let letterWords = text.split(` `);
  let emptySlots = letterWords.filter(els => els.includes(`_`));

  for (let slots of emptySlots) {
    if (!slots.endsWith(`_`)) {
      slots = slots.slice(0, slots.length - 1);
    }

    let wordToFill = words.find(els => els.length == slots.length);
    text = text.replace(slots, wordToFill);
  }

  console.log(text);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);