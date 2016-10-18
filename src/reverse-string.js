module.exports = (string) => {
  let result = '';

  for(let i = string.length - 1; i >= 0; i --) {
    result += string[i];
  }
  return result;
};


// return string.split('').reverse().join('');

// creating objects is slower than primitives, for loop is a primitive and the split/reverse/join creates an object
