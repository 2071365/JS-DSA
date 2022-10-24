/* function fib(n){
    if (n>0){
        let fibArray = [0,1]
        for(let i = 2; i < n; i++){
            fibArray.push(fibArray[i - 1] + fibArray[i - 2])
        }
        return fibArray[n - 1]
    }
    return null
} */

/* function fib(n, fibArray=[0,1]){
    if (fibArray.length === n + 1){
        return fibArray[n]
    }

    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
    return fib(n, fibArray)
} */

function fib(n){
    if (n < 2){
        return n
    }

    return fib(n - 1) + fib(n - 2)
}

function memoize(fn){
    const cache = {}
    return function (...args){
        if(args in cache){
            return cache[args]
        }
        const result = fn(...args)
        cache[args] = result
        return result
    }
}

fib = memoize(fib)

module.exports = fib