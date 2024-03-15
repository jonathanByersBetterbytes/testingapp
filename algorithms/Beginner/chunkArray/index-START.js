/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// Given an array and a chunk size, divide the array into many sub-arrays 
// where each sub-array has the specified length.

// arr & size
// new array of arrays 
// chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

// using for-loop and slice
function chunkArray(array, size) {
    const result = []
    for(let i=0;i<array.length;i += size)
        result.push(array.slice(i, i+size))
    return result
}

let result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
console.log(result)
document.querySelector('h2').innerText = result

// module.exports = chunkArray


// using recursion and slice
// function chunkArray(array, size) {
//     if(array.length <= size) // if at the end return what is left
//         return [array]
//     return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
// }

// using splice and while
// function chunkArray(array, size) {
//     const result = []
//     const arrayCopy = [...array]
//     while(arrayCopy.length > 0) 
//         result.push(arrayCopy.splice(0,size))
//     return result
// }

// using forloop
// function chunkArray(array, size) {
//     const result = [] // create a new empty array
//     for(val of array){// loop through array
//         const lastArray = result[result.length-1]// get last sub-array        
//         if(!lastArray || lastArray.length == size) result.push([val])// if no sub-array or requested size reached, add new array with val
//         else lastArray.push(val)// else add val to lastArray
//     }
//     return result
// }
