let score1 = 33
let score2 = "33"
let score3 = "33abc"
let score4 = null
let score5 = undefined

console.log(typeof score1)
console.log(typeof(score1)) // both of these does the same job

let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3) // Nan => Not a Number
let valueInNumber4 = Number(score4) // 0
let valueInNumber5 = Number(score5) // Nan

console.log(valueInNumber1)
console.log(valueInNumber2)
console.log(valueInNumber3)
console.log(valueInNumber4)
console.log(valueInNumber5)
console.log(typeof valueInNumber1)
console.log(typeof valueInNumber2)
console.log(typeof valueInNumber3)
console.log(typeof valueInNumber4)
console.log(typeof valueInNumber5)

console.log(Number(true)) // 1
console.log(Number(false)) // 0

console.log(Number("Chocolate")) // Nan

console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean(2))// true
console.log(Boolean("")) // false
console.log(Boolean("Choco")) // true

console.log(String(33))

// ******************************* Operations ****************************

let value = 3
let negValue = -value

console.log(negValue)

console.log(5+3)
console.log(5-3)
console.log(5*3)
console.log(5**3)
console.log(5/3)
console.log(5%3)

let str1 = "Calvin"
let str2 = " Klien"
let str3 = str1 + str2

console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log(3 + 4 * 5 % 3); // Readability is low
// console.log(+true); // Readability is low
// console.log(+""); // Readability is low

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

console.table([num1, num2, num3])

let Counter = 100
++Counter;
console.log(Counter);

let x = 3;
const y = x++;
// x is 4; y is 3

// BigInt is a numeric data type that can represent integers of arbitrary precision
let x2 = 3n; // 3n is BigInt its numerical value is equal to 3
const y2 = x2++;
// x2 is 4n; y2 is 3n

let x3 = 3;
const y3 = ++x;
// x is 4; y is 4

let x4 = 3n;
const y4 = ++x2;
// x2 is 4n; y2 is 4n
