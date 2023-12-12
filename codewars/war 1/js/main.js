// takes a name always valid string
// if name starts with "R" or "r" == plays banjo
// returns either name + " plays banno" or name + " does not play banjo"

function doesPlayBanjo(name){
    if(name[0] === 'R' || name[0] === 'r') return name+" plays banjo"
    else return name + ' does not play banjo'
}


const names = ['irish', 'daisy', 'anna'];
let testVar1 = "The quick brown fox jumps over the lazy dog." // 
let testVar2 = "This is not a pangram." // 
let testVar3 = [2,1,1] // 
console.log(doesPlayBanjo('roger')); // ['IRISH', 'DAISY', 'ANNA'];
//console.log(strRev('SessionStack'));
// console.log(diffNum(testVar3) == -1);
//document.querySelector('h2').innerText = leastNum(testVar2, 'value');








