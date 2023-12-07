
// count to 100
// fizz at multiples of 3 and buzz multiples of 5 and fizzbuzz if both
// 3 => fizz  5 => buzz  15 => fizzbuzz
// loop 1-100, evaluate if multiples

function fizzBuzz(){
    for(let i=1;i<=100;i++){
        console.log(i)
        if(i%3 === 0 && i%5 === 0) console.log('fizzbuzz')
        else if(i%3 === 0) console.log('fizz')
        else if(i%5 === 0) console.log('buzz')
    }
}




let testVar1 = "The quick brown fox jumps over the lazy dog." // 
let testVar2 = "This is not a pangram." // 
let testVar3 = [2,1,1] // 
console.log(fizzBuzz());
//console.log(pangram(testVar2));
// console.log(diffNum(testVar3) == -1);
//document.querySelector('h2').innerText = leastNum(testVar2, 'value');








