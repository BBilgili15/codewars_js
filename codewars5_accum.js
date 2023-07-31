// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


// ONGOING

const sentence = "ZpglnRxqenU"

const accum = (string) => {
  const result = []
  for (let i = 0; i < string.length; i++) {
    const char = string[i].toUpperCase() + string[i].toLowerCase().repeat(i)
    // get the 'i' letter and capitalise. Then add a lowercase version as many times as the index
    result.push(char)
  }
  
  return result.join("-");
}



console.log(accum(sentence))