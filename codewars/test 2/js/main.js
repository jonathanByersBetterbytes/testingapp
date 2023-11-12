function getMiddle(s){
  //word
  //return middle char if odd, middle two if even
  if(s.length % 2 === 0){
    let middleStart = s.length/2-1  
    s = s.slice(middleStart,middleStart+2)
  }else{
    let middleStart = Math.floor((s.length-1)/2)
    s = s.slice(middleStart,middleStart+1)
  }
  return s
}
console.log(getMiddle('TesTIngs'));
document.querySelector('h2').innerText = getMiddle('Te2st')
word
if the middle of the word is odd return middle letter
if even return middle two letter
function getMiddle(word){
    if(word%2 === 0){
        let mid = word.length/2-1
        word = word.substr(mid,2)
    }else{
        let mid = Math.ceil(word.length/2-1)
        word = word.substr(mid,1)
    }
    return word
}

console.log(getMiddle('TesTIngs'));
document.querySelector('h2').innerText = getMiddle('Te2st')

