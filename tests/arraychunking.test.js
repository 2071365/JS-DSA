const arrayChunking = require('../programs/arraychunking')

it('Array Chunking', () => {
    expect(arrayChunking([1,2,3,4], 2)).toEqual([[1,2],[3,4]])
})