const Name = "Sathwik"
const repoCount = 11

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${Name} and my repo count is ${repoCount}`);

const gameName = new String('Cranky')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(1, 4)
console.log(newString);

const anotherString = gameName.slice(-3, 6)
console.log(anotherString);

const newStringOne = "   Sathwik   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Shaga.com/Sathwik%20Shaga"

console.log(url.replace('%20', '-'))

console.log(url.includes('shyam'))

console.log(gameName.split('-'));