// function getMiddle(s)
// {
//   //Code goes here!
//   //word
//   //return middle char if odd, middle two if even
//   if(s.length % 2 === 0){
//     let middleStart = s.length/2-1  
//     s = s.slice(middleStart,middleStart+2)
//   }else{
//     let middleStart = Math.floor((s.length-1)/2)
//     s = s.slice(middleStart,middleStart+1)
//   }
//   return s
// }
// console.log(getMiddle('TesTIngs'));
// document.querySelector('h2').innerText = getMiddle('Te2st')
// word
// if the middle of the word is odd return middle letter
// if even return middle two letter
// function getMiddle(word){
//     if(word%2 === 0){
//         let mid = word.length/2-1
//         word = word.substr(mid,2)
//     }else{
//         let mid = Math.ceil(word.length/2-1)
//         word = word.substr(mid,1)
//     }
//     return word
// }
// word
// return middle letter if word length is odd
// middle two letters if even
//function getMiddle(word){
// if(word.length % 2 === 0){
//     let mid = word.length/2-1
//     word = word.slice(mid,mid+2)
// }else{
//     let mid = (word.length - 1)/2
//     word = word.slice(mid,mid+1)
// }
//  return word.substr(Math.ceil(word.length/2 - 1), word.length % 2 === 0 ? 2 : 1)
//}
// console.log(getMiddle('TesTIngs'));
// document.querySelector('h2').innerText = getMiddle('Te2st')
// word
// vowel count in word, lowercase and spaces
// function vowelCnt(str){
//     let vowel = ['a','e','i','o','u']
//     let cnt = 0;
//     for(i=0;i<str.length;i++)
//         for(ii=0;ii<vowel.length;ii++)
//             if(str[i] === vowel[ii]) cnt++
//     return cnt
// }
// console.log(vowelCnt('testings'));
// document.querySelector('h2').innerText = vowelCnt('test')


// two functions, max & min, list of ints
// largest and lowest numm in list respectively

// function max(arr){
//     let max = 0
//     arr.forEach(e => {
//         if(max < e) max = e
//     })
//     return max
// }

// function min(arr){
//     let min = 0
//     arr.forEach(e => {
//         if(min > e) min = e
//     })
//     return min
// }

// const max = (arr) => Math.max(...arr)
// const min = (arr) => Math.min(...arr)

// console.log(max([-52, 56, 30, 29, -54, 0, -110]));
// document.querySelector('h2').innerText = min([-52, 56, 30, 29, -54, 0, -110]);




console.log(max([-52, 56, 30, 29, -54, 0, -110]));
document.querySelector('h2').innerText = min([-52, 56, 30, 29, -54, 0, -110]);