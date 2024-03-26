/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays){
    let joinArr = []
    arrays.forEach(array => {
        joinArr = [...joinArr,...array]
    })
    let uniqueArr = joinArr.filter((item, index) => {
        return joinArr.indexOf(item) === index
    })
    return uniqueArr
}


 
let result = mergeArrays([1,2,3,3,3], [1,4,5,2])
console.log(result)
document.querySelector('h2').innerText = result
 
//module.exports = mergeArrays


// function mergeArrays(...arrays){
//     let joinArray = []
//     arrays.forEach(array => {
//         joinArray = [...joinArray,...array]
//     })
//     let uniqueArr = joinArray.reduce((newArray, item) => {
//         if(newArray.includes(item)) return newArray
//         else return [...newArray, item]
//     }, [])
//     return uniqueArr
// }




// function mergeArrays(...arrays){
//     let joinArray = []
//     arrays.forEach(array => {
//         joinArray = [...joinArray,...array]
//     })
//     return Array.from(new Set([...joinArray]))
// }

// function mergeArrays(...arrays){
//     let joinArray = []
//     arrays.forEach(array => {
//         joinArray = [...joinArray,...array]
//     })
//     return [...new Set([...joinArray])]
// }