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