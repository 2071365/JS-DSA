const rev = require('../programs/reversal')

describe('String Reversal', () => {
    test('Reverse String', () => {
        expect(rev.string_reversal('apple')).toBe('elppa')
    })
    test('Palindrome', () => {
        expect(rev.palindrome('markram')).toBe(true)
    })
    test('Reverse Integer', () => {
        expect(rev.reverseInt(-210)).toBe(-12)
    })
})