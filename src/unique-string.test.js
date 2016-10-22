const uniqueString = require('./unique-string');

it('should return true if the word has unique characters', () => {
  expect(uniqueString('hey')).toBe(true);
});

it('should return false if the word does not have unique characters', () => {
  expect(uniqueString('heyyyyy')).toBe(false);
});
