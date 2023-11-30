
// string
// removes all exlamation marks from it

// function RemoveExlMark(str){
//     return str.replaceAll('!','')
// }

// let testVar = 'hey!!!you!!'
// console.log(RemoveExlMark(testVar));
// document.querySelector('h2').innerText = RemoveExlMark(testVar);


// string of words
// length of shortest word

// const shortestWord = function(strWrds){
//     let arrWrds = strWrds.split(' ')
//     let shortestWrd = ''
//     for(let i = 0;i<arrWrds.length;i++){
//         if(shortestWrd.length > arrWrds[i].length || shortestWrd == '') shortestWrd = arrWrds[i]
//     }
//     return shortestWrd.length
// }
// let testVar = 'hey fine llkjI will tell you'
// console.log(shortestWord(testVar));
// document.querySelector('h2').innerText = shortestWord(testVar);


// two strings
// true if first arg ends with the 2nd arg

// function checkEnd2nd(arg1, arg2){
//     if(arg1.lastIndexOf(arg2) != -1){
//         return(arg1.length - arg2.length === arg1.lastIndexOf(arg2))
//     }
//     return false
// }
// function checkEnd2nd(arg1, arg2){
//     return(arg1.endsWith(arg2))
// }

// let testVar1 = 'abcwsabc'
// let testVar2 = 'abc'
// console.log(checkEnd2nd(testVar1, testVar2));
//document.querySelector('h2').innerText = checkEnd2nd(testVar1, testVar2);


// array of boolean/undefined/null
// number of true values

// let cntSheep = function(arr){
//     let cnt = 0
//     arr.forEach(e => e?cnt++:0)
//     return cnt
// }
// let cntSheep = function(arr){
//     return arr.filter(Boolean).length
// }

// let testVar1 = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  null, true,  false,
//     true,  undefined, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
// let testVar2 = 'abc'
// console.log(cntSheep(testVar1));
//document.querySelector('h2').innerText = checkEnd2nd(testVar1, testVar2);

// exactly 4 or 6 digit pin
// true if valid

// function checkPin(pin){
//     let strPin = pin.toString()
//     if(strPin.length !== 4 && strPin.length !== 6) return false
//     if(isNaN(strPin)) return false    
//     if(strPin.indexOf('-') == -1 && strPin.indexOf('.') == -1 && strPin.indexOf('+') == -1){
//         return strPin.length === 4 || strPin.length === 6
//     }
//     return false
// }

// let testVar1 = "123"
// let testVar2 = "+226"
// console.log(checkPin(testVar1));
// document.querySelector('h2').innerText = checkPin(testVar2);


// string, correct only "a-m" >= 1 and will only have letters a-z
// error rate as string, representing a numerator as the number of errors and denominator as the length of the string
// get the length of string as denom
// get the number of errors (n-z) as the numerator
// return is in formate "3/14"

// function printerError(str){
//     let denominator = str.length
//     let numerator = 0
//     let controlArr = str.split('')
//     controlArr.forEach(e => {
//         switch(e){
//             case 'n':
//             numerator++
//             break
//             case 'o':
//             numerator++
//             break
//             case 'p':
//             numerator++
//             break
//             case 'q':
//             numerator++
//             break
//             case 'r':
//             numerator++
//             break
//             case 's':
//             numerator++
//             break
//             case 't':
//             numerator++
//             break
//             case 'u':
//             numerator++
//             break
//             case 'v':
//             numerator++
//             break
//             case 'w':
//             numerator++
//             break
//             case 'x':
//             numerator++
//             break
//             case 'y':
//             numerator++
//             break
//             case 'z':
//             numerator++
//         }
//     })
//     return numerator + "/" + denominator
// }

// function printerError(s){
//     let cnt = 0
//     for(let i = 0;i < s.length;i++) 
//         if(s[i] > 'm') cnt++
//     return cnt+'/'+s.length
// }

// let testVar1 = "aaabbbbhaijjjm" // 0
// let testVar2 = "aaaxbbbbyyhwawiwjjjwwm" // 8
// console.log(printerError(testVar1));
// document.querySelector('h2').innerText = printerError(testVar2);

// string - can be any length, empty. valid input, only G,C,A,T
// string
// 'GCAT' => 'GCAU'
// find and replace the 'T' in the param with 'U', return new value

// function dnaSwap(str){
//     return str.replaceAll('T', 'U')
// }

// let testVar1 = "GCAT" // GCAU
// let testVar2 = "TGAC" // UGAC
// console.log(dnaSwap(testVar1));
// document.querySelector('h2').innerText = dnaSwap(testVar2);


let testVar1 = "GCAT" // GCAU
let testVar2 = "TGAC" // UGAC
console.log(dnaSwap(testVar1));
document.querySelector('h2').innerText = dnaSwap(testVar2);

