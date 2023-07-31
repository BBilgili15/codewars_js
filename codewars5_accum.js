// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

const sentence = "ZpglnRxqenU"

const accum = (string) => {
  const charIndex = {}
  let i = 0;
  for (let char of string) {
    charIndex[char] = i + 1;
    i++
  }
  console.log("Char Index: ", charIndex)
  const result = []
  for (let char in charIndex) {
    if (charIndex[char] !== 1) {
      result.push("-")
    }
    for (let i = 0; i < charIndex[char]; i++) {
      if (i == 0) {
        result.push(char.toUpperCase());
      } else {
        result.push(char.toLowerCase())
      }
    }
  }
  return result.join("");
}

console.log(accum(sentence))