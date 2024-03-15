function makeWord(lettersObject) {
  const wordArr = [];

  Object.entries(lettersObject).forEach((arr) => {
    const letter = arr[0];
    arr[1].forEach((letterPosition) => {
      wordArr[letterPosition] = letter;
    });
  });

  return wordArr.join('');
}
makeWord({ a: [0, 1], b: [2, 3], c: [4, 5] }) // 'aabbcc'
makeWord({ H:[0], e: [1], l: [2, 3, 8], o: [4, 6], W:[5], r:[7], d:[9]}) // 'HelloWorld'