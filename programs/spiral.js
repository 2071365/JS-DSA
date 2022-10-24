/* function matrix (n){

    if(n > 0){
        let matrixArray = []
        for (let i = 0 ; i < n ; i++){
            matrixArray.push(Array(n).fill(0))
        }
        matrixArray[0][0] = 1
        traverseRight(matrixArray, 1, 0, 0)
        return matrixArray
    }
    return 0 

}

function traverseRight(array, number, row, column){
    if (number === array[0].length ** 2){
        return
    }

    if (array[row][column + 1] === 0){
        array[row][column + 1] = number + 1
        return traverseRight(array, number+1, row, column + 1)
    }
    else{
        return traverseDown(array, number, row, column)
    }
}

function traverseDown(array, number, row, column){
    if (number === array[0].length ** 2){
        return
    }

    if (array[row+1] && array[row+1][column] === 0){
        array[row+1][column] = number + 1
        return traverseDown(array, number + 1, row + 1, column)
    }
    else{
        return traverseLeft(array, number, row, column)
    }
}

function traverseLeft(array, number, row, column){
    if (number === array[0].length ** 2){
        return
    }

    if (array[row][column-1] === 0){
        array[row][column-1] = number+1
        return traverseLeft(array, number + 1, row, column-1)
    }
    else{
        return traverseUp(array, number, row, column)
    }
}

function traverseUp(array, number, row, column){
    if (number === array[0].length ** 2){
        return
    }

    if (array[row-1][column] === 0){
        array[row-1][column] = number+1
        return traverseUp(array, number + 1, row-1, column)
    }
    else{
        return traverseRight(array, number, row, column)
    }
} */

function spiral(n){
    let arrayMatrix=[]

    for (let i =0 ; i < n; i++){
        arrayMatrix.push([])
    }

    let startRow = 0;
    let endRow = n - 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let counter = 1;

    while (startRow <= endRow && startColumn <= endColumn){
        for (let i = startColumn ; i <= endColumn ; i++){
            arrayMatrix[startRow][i] = counter
            counter++
        }
        startRow++

        for (let i = startRow ; i <= endRow ; i++){
            arrayMatrix[i][endColumn] = counter
            counter++
        }
        endColumn--

        for (let i = endColumn ; i >= startColumn ; i--){
            arrayMatrix[endRow][i] = counter
            counter++
        }
        endRow--

        for (let i = endRow ; i >= startRow ; i--){
            arrayMatrix[i][startColumn] = counter
            counter++
        }
        startColumn++

    }
    return arrayMatrix
}

console.log(spiral(4))