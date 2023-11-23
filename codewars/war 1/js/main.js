


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

