
// two strings
// true if first arg ends with the 2nd arg

function checkEnd2nd(arg1, arg2){
    if(arg1.lastIndexOf(arg2) != -1){
        return(arg1.length - arg2.length === arg1.lastIndexOf(arg2))
    }
    return false
}
function checkEnd2nd(arg1, arg2){
    return(arg1.endsWith(arg2))
}

let testVar1 = 'abcwsabc'
let testVar2 = 'abc'
console.log(checkEnd2nd(testVar1, testVar2));
document.querySelector('h2').innerText = checkEnd2nd(testVar1, testVar2);



