
// rand non neg num 
// digits of num in array reverse
// 32856 => [6,5,8,2,3]

function numToArray(arr){
    let str = arr+''
    return str.split('').map(str => Number(str)).reverse()
}

console.log(numToArray(32856));
document.querySelector('h2').innerText = numToArray(32856)



