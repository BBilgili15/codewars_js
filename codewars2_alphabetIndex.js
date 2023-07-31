const sentence = "The sunset sets at twelve o' clock"

const alphabetPosition = (string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const sentenceIndex = []
  for (const letter of string.toLowerCase()) {
    for (let char of alphabet) {
      if (letter == char) {
        sentenceIndex.push(alphabet.indexOf(char) + 1)
      }
    }
}
  return sentenceIndex.join(" ")
}


console.log(alphabetPosition(sentence))