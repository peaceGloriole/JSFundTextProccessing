function substring(str, startIdx, count) {
 let newStr = str.slice(startIdx, startIdx + count);

 console.log(newStr);
}
substring('ASentence', 1, 8);