
// recursion
function factorial(num){
    if(num === 0) return 1
    return num * factorial(num-1)
}

function strRev(text){
    if(text.length === 1) return text
    else return text.slice(-1) + strRev(text.slice(0,-1))
}
 
const names = ['irish', 'daisy', 'anna'];
let testVar1 = "The quick brown fox jumps over the lazy dog." // 
let testVar2 = "This is not a pangram." // 
let testVar3 = [2,1,1] // 
console.log(factorial(20)); // ['IRISH', 'DAISY', 'ANNA'];
console.log(strRev('SessionStack'));
// console.log(diffNum(testVar3) == -1);
//document.querySelector('h2').innerText = leastNum(testVar2, 'value');








