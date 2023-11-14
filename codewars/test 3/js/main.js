// word
// vowel count in word, lowercase and spaces
function vowelCnt(str){
    let vowel = ['a','e','i','o','u']
    let cnt = 0;
    for(i=0;i<str.length;i++)
        for(ii=0;ii<vowel.length;ii++)
            if(str[i] === vowel[ii]) cnt++
    return cnt
}
console.log(vowelCnt('testings'));
document.querySelector('h2').innerText = vowelCnt('test')


