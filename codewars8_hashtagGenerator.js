// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


const generateHashtag = (string) => {
    const array = ['#']
    let foundSpace = false
    for (const letter of string) {
      if (letter !== " ") {
        if (foundSpace) {
          array.push(letter.toUpperCase())
          foundSpace = false;
        } else {
          array.push(letter.toLowerCase())
        }
      } else {
        foundSpace = true;
      }
      
    }

    const hashtag = array.join("").replace(/\b\w/g, match => match.toUpperCase());
    if (hashtag.length > 140 || hashtag == "#") {
      return false
    } else {
      return hashtag
    }
  
}

console.log(generateHashtag("This is my hashtag"))
console.log(generateHashtag("This is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtagThis is my hashtag"))
console.log(generateHashtag(""))
console.log(generateHashtag("Codewars"))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))