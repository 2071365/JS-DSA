function capitalize(str){
    let capitalized = str[0].toUpperCase()

    for (i = 1; i < str.length; i++){
        if (str[i-1] === ' '){
            capitalized += str[i].toUpperCase()
        }
        else{
            capitalized += str[i].toLowerCase()
        }
    }

    return capitalized
}

/* function capitalize(str) {
    return str.toLowerCase().split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
} */

console.log(capitalize('HELLO FELLAS !!'))