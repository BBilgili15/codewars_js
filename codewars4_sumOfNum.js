const num1 = 2
const num2 = 4
// should return 9 (2 + 3 + 4)

const getSum = (a, b) => {
  let total = 0;
  if (a == b) {
    return a;
  } else if (a < b) {
    // Find sum of all integers between a & b
    while (a <= b) {
      total += a;
      a ++;
    }
  } else {
    while (b <= a) {
      total += b;
      b ++;
    }
  }
  return total;
}

console.log(getSum(num1, num2))




// Streamlined Code

// const getSum = (a, b) => {
//   let total = 0;
//   const step = a <= b ? 1 : -1;
//   while (a !== b + step) {
//     total += a;
//     a += step;
//   }
//   return total;
// };

// console.log(getSum(2, 4)); // Output: 9 (2 + 3 + 4)
// console.log(getSum(4, 2)); // Output: 9 (4 + 3 + 2)
