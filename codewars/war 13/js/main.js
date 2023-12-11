// ten minute walk
// perfect grid roads
// button press
// get an array of one letter strings ['n', 's', 'w', 'e']
// walk one block in the direction of letter
// one minute for each block
// return true if exactly 10 minute walk, false if not
function walk(arr){
    if(arr.length === 10){
        let dx = 0
        let dy = 0
        arr.forEach(l =>{
            console.log(l)
            switch(l){
                case 'n':
                    dx++
                    break
                case 's':
                    dx--
                    break
                case 'e':
                    dy++
                    break
                case 'w':
                    dy--
                    break
            }
        })
        if(dx === 0 && dy === 0)return true
    }
    return false
}
const names = ['irish', 'daisy', 'anna'];
let testVar1 = "The quick brown fox jumps over the lazy dog." // 
let testVar2 = "This is not a pangram." // 
let testVar3 = [2,1,1] // 
console.log(walk(['n','n','n','e','e','s','s','s','w','w'])); // ['IRISH', 'DAISY', 'ANNA'];
//console.log(strRev('SessionStack'));
// console.log(diffNum(testVar3) == -1);
//document.querySelector('h2').innerText = leastNum(testVar2, 'value');








