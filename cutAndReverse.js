function cutAndReverse(str) {
  let characters = str.split(``);
  let reversedCharacters = characters.reverse().join(``);

  let middleIdx = reversedCharacters.length / 2;

  let leftHalf = reversedCharacters.slice(middleIdx);
  let rightHalf = reversedCharacters.slice(0, middleIdx);

  console.log(leftHalf);
  console.log(rightHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
