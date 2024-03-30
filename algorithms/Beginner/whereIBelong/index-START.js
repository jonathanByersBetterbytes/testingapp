/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

// array of nums and a single num
// return the lowest index the num will be when inserted and sorted assending
//[1,3,5,8], 1.2  == 1

function whereIBelong(arr, num) {
   var counter = 0
   for (i = 0; i < arr.length; i++) {
       if (num > arr[i]) {
           counter++;
       }
       //console.log(arr[i])
   } 
   return counter
}


let result = whereIBelong([9,3,1,5,8], 1.2)
console.log(result)
document.querySelector('h2').innerText = result

//module.exports = whereIBelong

// function whereIBelong(arr, num) {
//    // push the num into the array
//    // sort the array assending
//    arr.push(num)
//    arr.sort((a,b) => a-b)
//    // find the index
//    return arr.indexOf(num)
// }