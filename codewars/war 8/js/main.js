
//  num 0-100
// average score by letter "A-F"
// 91 => A
// take a num 0-100 and asign a letter grade

// function grade(s1, s2, s3){
//     let num = (s1+s2+s3)/3
//     if(num < 60) return 'F'
//     else if(num < 70) return 'D'
//     else if(num < 80) return 'C'
//     else if(num < 90) return 'B'
//     else return 'A'
//     return 'Not a valid grade'
// }


// odd-length array ints, all same, but one num, arr >= 3
//single diff num

// function diffNum(arr){
//     for(let i=0;i<arr.length-1;i++){
//         if(i===0 && (arr[i] == arr[i+1] && arr[i] == arr[i+2]) == -1) return arr[i]
//         if(i===0 && arr[i] == arr[i+1]) return arr[i+1]
//         if(arr[i] == arr[i+1]) return arr[i+1]
//     }
// }

// let testVar1 = [1,2,1] // c
// let testVar2 = [1,1,2] // 
// let testVar3 = [2,1,1] // 
// console.log(diffNum(testVar1) == -1);
// console.log(diffNum(testVar2) == -1);
// console.log(diffNum(testVar3) == -1);
// document.querySelector('h2').innerText = diffNum(testVar2);


// string = g,y,r
// next color
// green => yellow
// take in a color and return the next color

// function stopLight(str){
//     if(str === 'green') return 'yellow'
//     else if(str === 'yellow') return 'red'
//     else if (str === 'red') return 'green'
// }

// let testVar1 = 'red'// c
// let testVar2 = 'green' // 
// let testVar3 = [2,1,1] // 
// console.log(stopLight(testVar1) == -1);
// // console.log(diffNum(testVar2) == -1);
// // console.log(diffNum(testVar3) == -1);
// document.querySelector('h2').innerText = stopLight(testVar2);

// arr of at least 1 num, no dups, 2nd is a switch of value or index
// smallest value or index of value
// 1,2,3,4,5, 'value' => 1
// 1,2,3,4,5, 'index' => 0

// function leastNum(arr, indVal){
//     let newArr = arr.slice()
//     let least = newArr.sort((a,b) => a - b)
//     if(indVal === 'value') return least[0]
//     else if(indVal === 'index') return arr.indexOf(least[0])
//     //return least[0]
// }

// function leastNum(a,r){
//     let m = Math.min(...a)
//     return r === 'value' ? m : a.indexOf(m)
// }

// let testVar1 = [3,2,1,4,5] // c
// let testVar2 = [1,2,3,4,5] // 
// let testVar3 = [2,1,1] // s
// console.log(leastNum(testVar1, 'index') == -1);
// // console.log(diffNum(testVar2) == -1);
// // console.log(diffNum(testVar3) == -1);
// document.querySelector('h2').innerText = leastNum(testVar2, 'value');

// string
// is a pangram? ignore nums and puncutation
//  "The quick brown fox jumps over the lazy dog"
// evaluate the string for an occourance of a-z at least once

// function pangram(str){
//     str = str.toLowerCase()
//     if(str.indexOf('a') == -1) return false;
//     if(str.indexOf('b') == -1) return false;
//     if(str.indexOf('c') == -1) return false;
//     if(str.indexOf('d') == -1) return false;
//     if(str.indexOf('e') == -1) return false;
//     if(str.indexOf('f') == -1) return false;
//     if(str.indexOf('g') == -1) return false;
//     if(str.indexOf('h') == -1) return false;
//     if(str.indexOf('i') == -1) return false;
//     if(str.indexOf('j') == -1) return false;
//     if(str.indexOf('k') == -1) return false;
//     if(str.indexOf('l') == -1) return false;
//     if(str.indexOf('m') == -1) return false;
//     if(str.indexOf('n') == -1) return false;
//     if(str.indexOf('o') == -1) return false;
//     if(str.indexOf('p') == -1) return false;
//     if(str.indexOf('q') == -1) return false;
//     if(str.indexOf('r') == -1) return false;
//     if(str.indexOf('s') == -1) return false;
//     if(str.indexOf('t') == -1) return false;
//     if(str.indexOf('u') == -1) return false;
//     if(str.indexOf('v') == -1) return false;
//     if(str.indexOf('w') == -1) return false;
//     if(str.indexOf('x') == -1) return false;
//     if(str.indexOf('y') == -1) return false;
//     if(str.indexOf('z') == -1) return false;
//     return true
// }



// let testVar1 = "The quick brown fox jumps over the lazy dog." // 
// let testVar2 = "This is not a pangram." // 
// let testVar3 = [2,1,1] // 
// console.log(pangram(testVar1));
// console.log(pangram(testVar2));
// console.log(diffNum(testVar3) == -1);
//document.querySelector('h2').innerText = leastNum(testVar2, 'value');



let testVar1 = "The quick brown fox jumps over the lazy dog." // 
let testVar2 = "This is not a pangram." // 
let testVar3 = [2,1,1] // 
console.log(pangram(testVar1));
console.log(pangram(testVar2));
// console.log(diffNum(testVar3) == -1);
//document.querySelector('h2').innerText = leastNum(testVar2, 'value');








