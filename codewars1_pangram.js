const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const sentence = "The quick brown fox jumps over the lazy dog.";

function isPangram(string) {
  const lowerCaseString = string.toLowerCase();
  for (let char of alphabet) {
    if (!lowerCaseString.includes(char)) {
      return false;
    }
  }
  return true;
}

console.log(isPangram(sentence));

