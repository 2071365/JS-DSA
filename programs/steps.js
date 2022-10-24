function steps(n, row=0){
    if (row === n){
        return
    }
    let symbols = ''
    for (let column = 0; column < n; column++){
        if(column <= row){
            symbols += '#'
        }
        else{
            symbols += ' '
        }
    }
    console.log(symbols)
    steps(n, row + 1)
}

/* function steps(n) {
    
    for (let i=0; i<n; ++i){
        let symbols = ''
        for(let j=0;j<n;++j){
            if(j<=i){
                symbols += '#'
            }
            else{
                symbols += ' '
            }
            
        }
        console.log(symbols)        
    }
} */
steps(3)
//module.exports = steps