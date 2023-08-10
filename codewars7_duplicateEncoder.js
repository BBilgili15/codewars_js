// The goal of this exercise is to convert a string to a new string where each character in the new 
// string is "(" if that character appears only once in the original string, or ")" if that character 
// appears more than once in the original string. Ignore capitalization when determining if a character 
// is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// ( - if once
// ) - if more than once

const duplicateEncode = (word) => {
  const characters = "abcdefghijklmnopqrstuvwxyz!@£$%^&*()?><~ "
  let obj = {}
  for (let char of word.toLowerCase()) {
    if (characters.includes(char.toLowerCase())) {
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

  const returnArray = []

  for (let letter of word.toLowerCase()) {
    if (obj[letter] > 1) {
      returnArray.push(')')
    } else {
      returnArray.push('(')
    }
  }

  const returnString = returnArray.join('')
  return returnString
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))
console.log(duplicateEncode("(( @"))
