// The goal of this exercise is to convert a string to a new string where each character in the new 
// string is "(" if that character appears only once in the original string, or ")" if that character 
// appears more than once in the original string. Ignore capitalization when determining if a character 
// is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 



const duplicateEncode = (word) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  let obj = {}
  for (let char of word.toLowerCase()) {
    if (alphabet.includes(char.toLowerCase())) {
      // if alphabet contains letter - do the next. Otherwise skip. Will stop the issue with multiple letters
      // then delete letter from alphabet to prevent duplication checking
      // does this need to be done here, or at the next for loop?
      for (let letter of word.toLowerCase()) {
        if (char == letter) {
          if (obj[char]) {
            obj[char] ++;
          } else {
            obj[char] = 1;
          }
        }
      }

    } 
  }
  return obj
}

// thought - maybe check if it's in alphabet. If you get it once, remove from alphabet. Might prevent duplication

// currently, if there are 2 of a specific letter, it checks against them twice. Hence 'T' having 4. 
// if there was 3, it would return 9 (squares effectively)

console.log(duplicateEncode("testt"))
