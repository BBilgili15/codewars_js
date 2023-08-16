// Write a function that takes in a string of one or more words, and returns the same string, but with all five 
// or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only 
// letters and spaces. Spaces will be included only when more than one word is present.


// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

const spinWords = (string) => {

  const wordArray = string.split(" ")
  const newSentenceArray = []

  for (let word of wordArray) {
    if (word.length > 4) {
      const wordLetters = word.split("").reverse()
      const reversedWord = wordLetters.join("")
      newSentenceArray.push(reversedWord)
    } else {
      newSentenceArray.push(word)
    }
  }

  return newSentenceArray.join(" ")
}

console.log(spinWords("Running down the mountain"))