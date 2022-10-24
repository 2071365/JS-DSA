function fizzBuzz(n) {
/*
    for (let i = 1 ; i <= n ; i++){
        if (!(i % 3) && !(i % 5)){
            console.log('fizzbuzz')
            continue
        }
        else if (!(i % 3)){
            console.log('fizz')
            continue
        }
        else if (!(i % 5)){
            console.log('buzz')
            continue
        }
        console.log(i)
    }
*/
    for (let i = 1 ; i <= n ; i++){
        // Whatever numbers are divisible by 3 and 5 should be divisible by 15
        if (!(i % 15)){
            console.log('fizzbuzz')
        }
        else if (!(i % 3)){
            console.log('fizz')
        }
        else if (!(i % 5)){
            console.log('buzz')
        }
        else {
            console.log(i)
        }        
    } 
}

module.exports = fizzBuzz