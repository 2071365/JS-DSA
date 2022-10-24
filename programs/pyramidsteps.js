/* function pyramid(n) {
    for (let i = 0 ; i < n ; i++){
        let symbols = ''
        let startPound = Math.floor(((2*n) - 1) / 2) - i
        let endPound = Math.floor(((2*n) - 1) / 2) + i
        for (let j = 0 ; j < (2*n)-1 ; j++){
            if (j <= endPound && j >= startPound){
                symbols += '#'
            }
            else{
                symbols += ' '
            }            
        }
        console.log(symbols)
    }    
} */

function pyramid(n, step=0, symbols=''){
    
    if (step === n){
        return
    }

    else if(symbols.length === (2*n)-1){
        console.log(symbols)
        pyramid(n, step+1)
    }

    else{
        const mid = Math.floor(((2 * n) - 1) / 2)
        const lowEnd = mid - step
        const highEnd = mid + step

        symbols.length <= highEnd && symbols.length >= lowEnd ? symbols += '#' : symbols += ' '
        pyramid(n, step, symbols)
    } 

    
}

pyramid(3)