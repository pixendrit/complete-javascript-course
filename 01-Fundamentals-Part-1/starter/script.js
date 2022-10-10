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
console.log(century);


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear)+ 18);
console.log(Number('Jonas'))
console.log(typeof NaN);

console.log(String(23), 23)

// type coercion. It happens whenever an operator is dealing with two values that have different types.
console.log('I am ' + 23 + ' years old');
//whenever there is an operation between a string and a number, the number will be converted to a string.

console.log('I am ' + '23' + ' years old');

console.log('23' - '10' -3); // - triggers an opposite conversion. From string to number.
console.log('23' * '2'); //string converts to number when multiplying.

//example
let n = '1' + 1;
n = n-1;
console.log(n);


// Truthy and falsy values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined))
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

const age = '18';
if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult (loose)');

const favourite = Number(prompt("What's your favourite number?"));


console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number!')
} else if (favourite === 9) {
    console.log('9 is also a cool number!')
} else {
    console.log('number is not 23 not 7, and not 9')
}

if (favourite !== 23) console.log('Why not 23?')


const day = 'thursday';

switch (day) {
    case "monday": //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to meetup');
        break; //without the break, the code simply continues executing
    case 'tuesday':
        console.log('Prepare theory ');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}


const day = 'thursday';

switch (day) {
    case "monday": //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to meetup');
        break; //without the break, the code simply continues executing
    case 'tuesday':
        console.log('Prepare theory ');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}


// The difference between statements and expressions
// An expression is a piece of code that produces a value
// 3+4 /  This is an expression
// 1991 / This is also an expression. Because it will produce a value
// true && false && !false / also an expression

// A statement does not produce a value.

if (23 > 10) {
    const str = '23 is bigger';
}
//this if statement does not produce a value. Simply performs an action.
// a statement is like a complete sentence. It's words, might be expressions.

console.log(`I'm ${2037 - 1997} years old`)

 */

// The Conditinal (ternary) operator

const age = 23;
age >= 18 ? console.log('I like to smoke cigarettes') : console.log(`Nah I'm good`)

// Ternary (three). the condition + the if part + the else part.
// An operator always produces a value. If we have a value, we can assign that value to a variable.


const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink2);

//This is basically just a way to write less code. Kind of easier. We can also use it inside an expression

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

// The ternary is not thought as a complete replacement for an if-else block. Just for shorter stuff like this.

// Coding challenge. Tip calculator

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? 0.15 * bill : 0.20 * bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



































