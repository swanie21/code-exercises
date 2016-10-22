'use strict';

module.exports = (word) => {
let stringArray = word.toLowerCase().replace(/[\s\d]+/g, '').split('').sort();

for(let i = 0; i < stringArray.length; i++) {
  if(stringArray[i] === stringArray[i + 1]) { return false; }
    else return true;
  }
};

// let stringArray = [...string.toLowerCase().replace(/[\s\d]+/g, '').sort()];
// spread is essentially doing the split('')

// const letters = {};
//
// for (const letter of word) {
//   if(letters[letter]) {return false;}
//   letters[letter] = true;
// }
// return true;
// };
