// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False


// To Refactor
// Misunderstood problem
// Brackets need to be in a legal format. Not just that the open has a corresponding close. 

const string1 = "[(])"
const string2 = "{[)"

const validBraces = (string) => {
  const openBraces = []
  const remainingChars = []
  for (const brace of string) {
    if (brace == "(" | brace == "[" | brace == "{") {
      openBraces.push(brace)
    } else {
      remainingChars.push(brace)
    }
  }

  if (openBraces.length !== remainingChars.length) { // if they aren't the same size, they can't match
    return false
  } else {
      for (const brace of openBraces) {
        for (const char of remainingChars) {
          if (brace == "(") {
            if (char == ")") {
              remainingChars.splice(remainingChars.indexOf(char), 1)
            }
          }
          
          else if (brace == "{") {
            if (char == "}") {
              remainingChars.splice(remainingChars.indexOf(char), 1)
            }
          }
          
          else if (brace == "[") {
            if (char == "]") {
              remainingChars.splice(remainingChars.indexOf(char), 1)
            }
          }
          
        }
      }      
  }

  return remainingChars.length == 0
}



console.log(validBraces(string1))