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

// ES6 for loop without i iteration
// for( let char of string) {console.log(char)}

 // Big O complexity chart -> common data structure operations
