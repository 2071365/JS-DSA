function arrayChunking(array, size){
    let chunked = []
    for (i = 0; i < array.length; i+= size){
        chunked.push(array.slice(i, i+size))
    }
    return chunked
}

console.log(arrayChunking([1,2,3,4,5], 2))

/* function arrayChunking(array, size){
    const chunked = []

    for (let element of array){
        let last = chunked[chunked.length - 1]
        if(!last || last.length === size){
            chunked.push([element])
        }
        else{
            last.push(element)
        }
    }

    return chunked

} */

module.exports = arrayChunking