function string_reversal (str){
    // return str.split('').reverse().join('')
    return str.split('').reduce((init, item) => item + init,'')
}

function palindrome(str) {
    /*
    return str.split('').every((el, ind) => el === str[str.length - ind - 1])
    */
    return str
    .split('')
    .reduce((init, char) => char + init, '') === str
    
}

function reverseInt(intInput){
    /*
    return parseInt(
        (intInput)
        .toString()
        .replace('-','')
        .split('')
        .reduce((rev, elem) => elem + rev,'')
        ) 
        * Math.sign(intInput)
    */
    return parseInt(
        intInput
            .toString()
            .split('')
            .reverse()
            .join('')
        )
        *
        Math.sign(intInput)
}

debugger;
module.exports = {
    string_reversal,
    palindrome,
    reverseInt
}