const name = "kapil"
const repocount = 47

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('kapil9123@gmail.com')
// console.log(gameName[6]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));