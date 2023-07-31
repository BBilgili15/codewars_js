const text = 'Running'

const duplicateCount = (string) => {
  let duplicates = 0
  let charCount = {}

  for (let char of string.toLowerCase()) {
      if (charCount[char]) {
        charCount[char] ++
      } else {
        charCount[char] = 1;
      }
    }

    for (let char in charCount) {
      if (charCount[char] > 1) {
        duplicates ++
      }
  }
  return duplicates
}

console.log(duplicateCount(text))
