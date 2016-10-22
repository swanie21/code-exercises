'use strict';

module.exports = (word1, word2) => {
  const string1 = word1.toLowerCase().split('').sort().join('').trim().replace(/\d/g, '');
  const string2 = word2.toLowerCase().split('').sort().join('').trim().replace(/\d/g, '');
  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
};

// hash table is an effective and efficient way to handle an array, better than using sort method since it's slower
// iteration is faster than sorting

// const firstWordLetter = {};
// const secondWordLetter = {};
//
//   for(let letter of string1) {
//     const l = firstWordLetter[letter];
//     firstWordLetter[letter] = l ? l + 1 : 1;
//   }
//   for(let letter of string2) {
//     const l = secondWordLetter[letter];
//     secondWordLetter[letter] = l ? l + 1 : 1;
//   }
//   for(let letter of Object.keys(firstWordLetter)) {
//     if(Object.keys(firstWordLetter).length !== Object.keys(secondWordLetter).length) {
//       return false;
//     }
//   }
//   return true;

// ES6 for loop without i iteration
// for( let letter of string) {console.log(letter)}

 // Big O complexity chart -> common data structure operations
