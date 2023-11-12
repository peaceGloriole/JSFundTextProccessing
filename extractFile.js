function extractFile(str) {
  let file = str.split(`\\`).pop();
  let lastDotIdx = file.lastIndexOf(`.`);

  let fileName = file.slice(0, lastDotIdx);
  let extension = file.slice(lastDotIdx + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');