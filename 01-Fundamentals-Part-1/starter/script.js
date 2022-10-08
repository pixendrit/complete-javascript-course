/*
// let js = "amazing";
// if (js === "amazing") alert("Javascript is FUN");
// console.log(40 + 8 + 23 - 10);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

//undefined. Declaring an empty value will have the value of undefined.

year = 1991;
console.log(typeof year);
//not creating a new variable. Simply assigning a new value of the upper variable.
//This is the effect of dynamic typing.

console.log(typeof null);
// it shows it is an object, but it is a bug that has not been fixed for legacy reasons.


let age = 30;
age = 31;

//it is perfectly okay to reassign values. It was 30, now it is mutated to 31.

const birthYear = 1991;
// birthYear = 1990; We are unable to do this because a const cannot be mutated
// const job; This is not legal. We cannot create empty const variables.
//It's a good practice to have as little mutating variables as possible. By default, always use const.

//The var keyword is completely not needed. But we should know how it works. It works pretty much the same way as let.

var job = 'programmer';
job = 'teacher';

lastName = 'Hyseni';
console.log(lastName);
//not recommended. Will learn later why.
*/

/*
 // Math operators
 const now = 2037;
 const ageJonas = now - 1991;
 const ageSarah = now - 2018;
 console.log(ageJonas, ageSarah);

 //that is how we use the - operator to calculate. Also, console log can accept multiple values.

 console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
 // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

 const firstName = 'Jonas';
 const lastName = 'Schmedtmann';

 console.log(firstName + ' ' + lastName);

 //Assignment operators
 let x = 10 + 5;
 x += 10; //x = x + 10 = 25
 x *= 4; //x = x * 4 = 100
 x++; // x = x + 1
 x--;
 x--;
 console.log(x);


 // Comparision operators
 console.log(ageJonas > ageSarah); // >, <, >=, <=
 console.log(ageSarah >= 18);

 const isFullAge = ageSarah >= 18;

 console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991, now - 2018);


let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK


// 1
const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

//2
const BMIMark = massMark / (heightMark * heightMark);


const BMIJohn = massJohn / (heightJohn * heightJohn);

//3
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);



const firstName = 'Pixendrit';
const job = 'game designer';
const birthYear = 1997;
const year = 2037;

const pixendrit = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(pixendrit);

const pixendritNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(pixendritNew)
//template literals are so cool, actually. Using backticks seems more practical than concatenating strings.
//we can also use backticks for regular strings

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines')

console.log(`String 
multiple
lines`);

//it's a lot cleaner to use template literals

*/

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)



















