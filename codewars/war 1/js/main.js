
const names2 = ['irish', 'daisy', 'anna'];

let testVar1 = "The quick brown fox jumps over the lazy dog." // 
let testVar2 = "This is not a pangram." // 
let testVar3 =[2,1,6,9] //
let intPop1 = 1000, rate1 = 2, imigr1 = 50, desPop1 = 1200

test = names2.splice(2,0,"complex","language")

// p0 = 1000 , int or float, positive
// rate 2% needs to be converted/100
// imigration 50 per year
// at year-end population count, round down
// return numers of years it would be projected to hit 1,200 residents?

function nbYear(intPop, rate, imigr, desPop){
    rate = rate/100
    let cnt = 0
    for(;intPop<=desPop;cnt++){        
        intPop = Math.floor(intPop * (1+rate)) + imigr
    }
    return cnt
}
console.log(nbYear(intPop1, rate1, imigr1, desPop1))


// reverse only the words in place
// let testVar1 = "The quick brown fox jumps over the lazy dog."
// test = testVar1.split(' ').map(e=> e.split('').reverse().join('')).join(' ')
// console.log(test)

// console.log(testVar3.reduce((a,elm)=> a + elm, 0))
// console.log(arr)
// let arr = ["I", "study", "JavaScript"]
// console.log(arr.splice(1, 1, ...names2))
// console.log(arr)

// number
// console.log all values from 1 to number
// div 3 'fizz' instead of that number, div 5 'buzz', div 3 & 5 'fizzbuzz'

// function loop(num){
//     for(let i=1;i<num;i++){
//         if(i%3===0 && i%5===0)console.log('fizzbuzz')
//         else if(i%3===0)console.log('fizz')
//         else if(i%5===0)console.log('buzz')
//         else console.log(i)
//     }
// }

// loop(31)


// int pop 1000
// growth rate (2.5% needs conversion ) positive or null float
// new inhabitants 50 per year int
// round down inhabitants each year
// desired population positive int
// return num years to reach desired population

// let intPop1 = 1000, rate1 = 2.5, imigr1 = 50, desPop1 = 1200

// function nbYear(intPop, rate, imigr, desPop){
//     intPop = Math.floor(intPop*(1+rate/100)) + imigr
//     if(intPop >= desPop) return 1
//     return nbYear(intPop, rate, imigr, desPop) + 1  
// }
// console.log(nbYear(intPop1, rate1, imigr1, desPop1))

//function nb_year(intPop, rate, imigr, desPop){
//     // convert rate
//     rate = rate / 100
//     let cnt = 0
//     // calc growth and imigration round down
//     for(;intPop <= desPop;cnt++){        
//         intPop += Math.floor(intPop * rate) + imigr
//     }
//     return cnt
// }
// console.log(nb_year(intPop1, rate1, imigr1, desPop1))


// integral perfect square, interger non-negative
// returns the next integral perfect square or -1 if number passed in is not one

// take in num
// find if IPS
// return next IPS if it is

// function findNextIntSquare(num){
//     num = Math.sqrt(num)
//     return num++ % 1 ? -1 : Math.pow(num, 2)
// }

// console.log(findNextIntSquare(121))


// arr scores, my score
// find average and compare your score
// return true or false if your better

// add your score to arr
// find average of all scores
// compare your score to avg
// function compareScore(arr, myScore){
//     arr.push(myScore)
//     let avg = arr.reduce((tot,elm) => tot += elm, 0)
//     console.log(avg)
//     console.log(avg/arr.length < myScore ? true : false)
//     return (avg/arr.length < myScore ? true : false)
// }


// const names2 = ['irish', 'daisy', 'anna'];
// let testVar1 = "The quick brown fox jumps over the lazy dog." // 
// let testVar2 = "This is not a pangram." // 
// let testVar3 = [82,71,61,90] //
// let score = 99
// compareScore(testVar3, score)


// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// let str = 'string of  words'

// function funky(str1){
//     str1 = str1.split(' ') // ['string','of','words']
//     console.log(str1)
//     str1 = str1.map(word => word.split('').reverse().join('')).join(' ')
//     console.log(str1)
// }

// funky(str)

// let str = 'string of words'
// function funky(str1){
//     let newStr = str1.split(' ').map(word => word.split('').reverse().join('')).join(' ')
//     console.log(newStr)
// }

// funky(str)

// Use console.table instead of console.log
// We often use console.log to print some information, but sometimes it's not so intuitive.

// const foods = [
//   {
//     name: '🍔',
//     price: 30.89,
//     group: 1,
//   },
//   {
//     name: '🍨',
//     price: 20.71,
//     group: 1,
//   },
//   {
//     name: '🍿',
//     price: 10.31,
//     group: 2,
//   },
//   {
//     name: '🍵',
//     price: 5.98,
//     group: 2,
//   },
// ]
// console.table(foods)
//console.log(foods.filter((value, i, foods) => console.log(value), 1)) //
//console.log(strRev('SessionStack'));
// console.log(diffNum(testVar3) == -1);
//document.querySelector('h2').innerText = leastNum(testVar2, 'value');

// Use reduce to calculate the sum
// Now a customer has bought a lot of things. I need to know how much he should pay.
// Maybe you’ll do it like this:
// const foods = [
//     {
//       name: '🍔',
//       price: 30,
//       amount: 10,
//     },
//     {
//       name: '🍨',
//       price: 20,
//       amount: 3,
//     },
//     {
//       name: '🍿',
//       price: 10,
//       amount: 5,
//     },
//     {
//       name: '🍵',
//       price: 5,
//       amount: 9,
//     },
//   ]
//   let sum = 0
//   foods.forEach((food) => {
//     sum += food.price * food.amount
//   })

//   A better way
//   Writing like the above can achieve the purpose, but the amount of code is still too much, we have an easier way.
// let sum = foods.reduce((res,food) => res += food.amount*food.price, 0)
// console.log(sum) // 455

// Rounding Trick
// Wow, it’s Halloween, and to celebrate the holiday, all food is discounted and the decimals are all erased.
// We can use Math.floor, but is there an easier way? How about the ~~ operator?

// const foods = [
//     {
//       name: '🍔',
//       price: 30.89
//     },
//     {
//       name: '🍨',
//       price: 20.71
//     },
//     {
//       name: '🍿',
//       price: 10.31
//     },
//   ]
// const discountedFoods = foods.map((it) => {
//     return {
//         name: it.name,
//         price: ~~it.price
//     }
// })
// console.log(discountedFoods)

// Easy way to flatten an array
// There’s some mess of food, how can we put them in a basket? If [] is a basket.
//const foods = [ [ '🍔', [ '🍫' ] ], [ '🍨', [ '🍿', [ '🍵' ] ] ] ]

//The first way
// const flattenFoods = (foods) => {
//     return foods.reduce((res, food) => {
//       return res.concat(Array.isArray(food) ? flattenFoods(food) : food)
//     }, [])
// }
// console.log(flattenFoods(foods)) // ['🍔', '🍫', '🍨', '🍿', '🍵']

// The second way
// Do you have a shorter way to achieve this? Yes, we can use [].flat, a simpler and smarter way.
// Using Infinity means we don't care how many levels the food is nested.
//console.log(foods.flat(Infinity)) // ['🍔', '🍫', '🍨', '🍿', '🍵']


// const foodMap = {
//     '🍔': 30,
//     '🍨': 20,
//     '🍿': 10,
//     '🍫': 5
//   }
//   // pay attention here
//   Object.prototype['🌭'] = 40

//General way
// Use for in to iterate over foodMap, but '🌭' is also printed, which we don't want to see:
//for(key in foodMap) console.log(key, foodMap[key])


// A better way
// Use Object.entries has at least two benefits:
// 1.  Only properties on the object are printed, properties on the prototype are ignored.
// 2.  Get the value of the object directly instead of using obj[key] to read it.

// Object.entries(foodMap).forEach(([ key, value ]) => {
//     console.log(key, value) 
// })


// Swap two values using destructuring
// Now I have burgers and you have chocolate. We are good friends and want to exchange food. How do we usually do it?
// let myFood = '🍔'
// let yourFood = '🍫'
// let tempFoot = myFood
// myFood = yourFood
// yourFood = tempFoot
// console.log(myFood, yourFood) // 🍫 🍔


// let myFood = '🍔'
// let yourFood = '🍫'
// ;[ myFood, yourFood] = [yourFood,myFood]
// console.log(myFood, yourFood)    // 🍫 🍔


//Now, if you were asked to find the food that belongs to group 1, how would you find it?
//Here’s the data:

// IN: foods arr
// OUT: food in group 1

// const foods = [
//     {
//         name: '🍔',
//         group: 1,
//     },
//     {
//         name: '🍨',
//         group: 1,
//     },
//     {
//         name: '🍿',
//         group: 2,
//     },
//     {
//         name: '🍵',
//         group: 1,
//     },
// ]
// const names = foods
//     .filter(food => food.group === 1)
//     .map(food => food.name)
// console.log(names)


// two arguements 
// returns array of the first n multiples of x
// positive greater than 0
//countBy(1, 10) === [1,2,3,4,5,6,7,8,9,10]
//countBy(2, 5) === [2,4,6,8,10]

// function countBy(n, x){
//     let arr = []
//     let count = n
//     for(let i = 1;i <= x;i++){
//         arr.push(count*i)
//     }
//     return arr
// }
// console.log(countBy(2,5))


