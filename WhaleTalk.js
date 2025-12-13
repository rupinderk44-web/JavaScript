/*
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started!
*/
// 1. Input text
const input = "turpentine and turtles";

// 2. Vowels array
const vowels = ['a', 'e', 'i', 'o', 'u'];

// 3. Empty result array
let resultArray = [];

// 4. Loop through input string
for (let i = 0; i < input.length; i++) {

  // 10 & 11. Double 'e' and 'u'
  if (input[i] === 'e') {
    resultArray.push('e');
  }
  if (input[i] === 'u') {
    resultArray.push('u');
  }

  // 6. Inner loop through vowels
  for (let j = 0; j < vowels.length; j++) {

    // 8. Compare input letter with vowels[j]
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

// 12. Log array
console.log(resultArray);

// 13. Join + capitalize
const resultString = resultArray.join('').toUpperCase();

console.log(resultString);

