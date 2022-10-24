const anagram = require('../programs/anagrams')

it('Anagram tests', () => {
    expect(anagram('This is real.', 'This is Earl !!')).toBe(true)
})