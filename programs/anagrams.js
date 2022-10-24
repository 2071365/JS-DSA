function anagrams(str1, str2){
    let str1Map = str1.toLowerCase().replace(/\W/g, '').split('')
    let str2Map = str2.toLowerCase().replace(/\W/g, '').split('')
    if (str1Map.length !== str2Map.length){
        return false
    }
    str1Map = str1Map.reduce((init, el) => init?.[el] ? {...init, [el]: init[el]+1} : {...init, [el]: 1}, {})
    str2Map = str2Map.reduce((init, el) => init?.[el] ? {...init, [el]: init[el]+1} : {...init, [el]: 1}, {})

    for (let element in str1Map){
        if (str1Map[element] !== str2Map[element]){
            return false
        }
    }
    return true
}

/* function anagrams(str1, str2){
    return str1.toLowerCase().replace(/\W/g, '').split('').sort().join('') === str2.toLowerCase().replace(/\W/g, '').split('').sort().join('')
} */

module.exports = anagrams