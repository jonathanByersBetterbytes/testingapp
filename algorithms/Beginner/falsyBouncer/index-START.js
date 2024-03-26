/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// array
// returns and array with only truthy values
// [0,false,true,1] [true,1]

function falsyBouncer(array) {
    // loop with a for of loop
    let truthyArr = []
    for(elm of array) if(elm) truthyArr.push(elm)
    // return result
    return truthyArr
}

 
let result = falsyBouncer([0,false,true,1])
console.log(result)
document.querySelector('h2').innerText = result

//module.exports = falsyBouncer


// function falsyBouncer(array) {
//     // loop with a filter
//     return array.filter(item => {
//         return item
//     })
//     // return result
// }