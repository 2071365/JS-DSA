const fib = require('../programs/fibonnacci')

test('fibonacci', () => {
    expect(fib(35)).toBe(9227465)
})