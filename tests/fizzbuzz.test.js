const fizzBuzz = require('../programs/fizzbuzz')

test('Fizzbuzz Test', () => {
    expect(fizzBuzz).toBeDefined()
    console.log = jest.fn()
    fizzBuzz(15)
    expect(console.log.mock.calls.length).toBe(15)
    expect(console.log.mock.calls[0][0]).toBe(1)
    expect(console.log.mock.calls[1][0]).toBe(2)
    expect(console.log.mock.calls[2][0]).toBe('fizz')
    expect(console.log.mock.calls[4][0]).toBe('buzz')
    expect(console.log.mock.calls[14][0]).toBe('fizzbuzz')
})