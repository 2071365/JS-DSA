const maxChar = (str) => {
    const charMap =  str.split('').reduce((obj, el) => obj?.[el] ? {...obj, [el]: obj[el]+1} : {...obj, [el]: 1}, {})
    let max = 0
    let maxChar = ''
    for (let char in charMap){
        maxChar = max && charMap[char] <= max ? maxChar : char 
        max = max && charMap[char] <= max ? max : charMap[char]        
    }
    return {[maxChar]: max}
}

module.exports = maxChar


