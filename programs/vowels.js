function vowels(str) {
    const match = str.match(/[aeiou]/gi)
    return match ? match.length : 0
}

/* function vowels(str) {
    let counter = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'] // could have used 'aeiou' but arrays are more convenient. Ex: ['a','abc'] which we cannot use for comparison when written as a string.
    for (let i of str.toLowerCase()){
        counter += checker.includes(i) ? 1 : 0
    }
    return counter
} */

console.log(vowels('AsfaeiouesE'))
