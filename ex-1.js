// solution 1
// let words = ["hello", "world"];
// function getWordLengths(word) {
//   // Start coding here
//   return word.split("").length
// }
// const result = words.map(getWordLengths);

// console.log(result); // Output: [5, 5]


// solution 2
let words = ["hello", "world"];

function getWordLengths(words) {
  return words.map(function (n) {
    return n.length;
  });
}
// Start coding here

const result = getWordLengths(words);

console.log(result);
