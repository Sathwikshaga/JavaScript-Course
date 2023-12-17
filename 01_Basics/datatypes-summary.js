//  Primitive Datatypes: Call by Value

//  7 types: String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(typeof anotherId);

const bigNumber = 3456543576654356754n

// Non-primitive Datatypes : Call by Reference

// 3 Types: Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(heros)
console.log(myObj)
console.log(myFunction)
console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)
// https://262.ecma-international.org/5.1/#sec-11.4.3

// *********************** Memory allocation in Stack and Heap *****************

// Stack(Primitive), Heap(Non-Primitive)

let myCarBrand = "Ford Mustang"
let anotherCarBrand = myCarBrand

anotherCarBrand = "Porshe 911" // change second variable and check for any change in the first one

console.log(myCarBrand) // No change
console.log(anotherCarBrand)

let userOne = {
    email: "user@google.com",
    upiId: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@yahoo.com" // change second variable and check for any change in the first one

console.log(userOne.email) // Change is observed
console.log(userTwo.email)