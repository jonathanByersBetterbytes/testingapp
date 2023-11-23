

// array of boolean/undefined/null
// number of true values

let cntSheep = function(arr){
    let cnt = 0
    arr.forEach(e => e?cnt++:0)
    return cnt
}

let testVar1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  null, true,  false,
    true,  undefined, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
console.log(cntSheep(testVar1));
document.querySelector('h2').innerText = cntSheep(testVar1);

