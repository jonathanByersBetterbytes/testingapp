// array w/at least two elements, all numbers, unique, ascending order, + or -,
//
// find first element in array not consecutive
// if all consectutive return null
function nonConsectutiveFind(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]+1 != arr[i+1]) return arr[i+1]
    }
    return null
}





let testVar1 = [1,2,3,8,9,10]  // 
let testVar2 = 2 // 
console.log(nonConsectutiveFind(testVar1));
document.querySelector('h2').innerText = nonConsectutiveFind(testVar1);








