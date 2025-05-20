const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('../src/stringUtils');

test('inverte una stringa', () => {
    expect(reverseString('ciao')).toBe('oaic');
});

test('riconosce un palindromo', () => {
    expect(isPalindrome('anna')).toBe(true);
    expect(isPalindrome('ciao')).toBe(false);
});

test('tronca una stringa lunga', () => {
    expect(truncateString('abcdef', 3)).toBe('abc...');
});
test('non tronca se corta', () => {
    expect(truncateString('abc', 5)).toBe('abc');
});

test('conta i caratteri', () => {
    expect(countCharacters('aab')).toEqual({ a: 2, b: 1 });
});
