const anagramString = require('./anagram-string');

it('should return true if the words are the same but in different order', () => {
  expect(anagramString('hello', 'holle')).toBe(true);
});

it('should ignore numbers in the string', () => {
  expect(anagramString('he llo298', 'hoLLe')).toBe(true);
});

it('should ignore spaces in the string', () => {
  expect(anagramString('he l l o', 'hoLLe')).toBe(true);
});
