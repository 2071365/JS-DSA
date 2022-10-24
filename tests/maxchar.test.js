const maxChar = require('../programs/maxchar')

test('Maximum occurances of a character in a string', () => {
    expect(maxChar('appollo')).toEqual({'p': 2})
})