// console.log('Codewars Baby!');

// function booleanToString(b){
//     return b===false?'false':'true';
// }

// console.log(booleanToString(false));
// document.querySelector('h2').innerText = "Results!"


// function booleanToString(b){
//     let words = [b.toString()[0], b.toString()[1], b.toString[2], b.toString[3], b.toString()[4]];
//     if(words[0] == 't')
//         for(let i in words)
//           while(words[0] = "t")
//             while(words[1] = "r")
//               while(words[2] = "u")
//                 while(words[3] = "e")
//                   return words.splice(0, 20, "t", "r", "u", "e").join("");
//     if(words[0] == 'f')
//         for(let i in words)
//           while(words[0] = "f")
//             while(words[1] = "a")
//               while(words[2] = "l")
//                 while(words[3] = "s")
//                   while(words[4] = "e")
//                   return words.splice(0, 20, "f", "a", "s", "s", "e").join("");
//     if(words[0] == 'd')
//         for(let i in words)
//           while(words[0] = "d")
//             while(words[1] = "u")
//               while(words[2] = "d")
//                 while(words[3] = "e")
//                   return words.splice(0, 20, "d", "u", "d", "e").join("");
//   }

// rand non neg num 
// digits of num in array reverse
// 32856 => [6,5,8,2,3]

// function numToArray(arr){
//     let str = arr+''
//     return str.split('').map(str => Number(str)).reverse()
// }

// console.log(numToArray(32856));
// document.querySelector('h2').innerText = numToArray(32856)

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













console.log(vowelCnt('testings'));
document.querySelector('h2').innerText = vowelCnt('test')








