
const transformNamesToUppercase = function (names) {
    const results = [];
    for (let i = 0; i < names.length; i++) {
      results.push(names[i].toUpperCase());
    }
    return results;
  };
  

const names = ['irish', 'daisy', 'anna'];
let testVar1 = "The quick brown fox jumps over the lazy dog." // 
let testVar2 = "This is not a pangram." // 
let testVar3 = [2,1,1] // 
console.log(transformNamesToUppercase(names)); // ['IRISH', 'DAISY', 'ANNA'];
//console.log(pangram(testVar2));
// console.log(diffNum(testVar3) == -1);
//document.querySelector('h2').innerText = leastNum(testVar2, 'value');








