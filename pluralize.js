// DO NOT CHANGE ANYTHING BETWEEN THE LINEs BELOW.

const prompCreator = require('prompt-sync');

const prompt = prompCreator();

const noun = prompt('Enter a string: ');
const count = prompt('Enter a number: ');

console.log('noun is ' + noun);
console.log('count is ' + count);

// TODO: Set the result to a string of the number and a noun in pluralized form, like
// "5 cats" or "1 dog", given a noun and count from above. For example, if noun is "cat" and count
// is 5, `result` should be "5 cats".
const result = count === 1 ? count + " " + noun : count + " " + noun + "s";

// DO NOT CHANGE ANYTHING BELOW THIS LINE.
console.log('result= ' + result);

module.exports = {
  result,
};
