'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Auto';
// const private = 4234;

function logger() {
console.log('My name is Pixendrit');
}

// calling / running / invoking function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

//we need to save the return value. We need to capture it
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);


//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}


const age1 = calcAge1(1997);
console.log(age1);

//anonymous function. Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);


//Arrow functions. Easier and faster to write. Still a function expression though.
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3)

// how many years a person has left until retirement
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1997, 'Pixendrit'));
console.log(yearsUntilRetirement(1991, 'Jonas'));


function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));


const calcAge = function (birthYear) {
    return 2037 -  birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    // const age = 2037 - birthYear;
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
// JavaScript Fundamentals – Part 2
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores


//1
const calcAverage =  (score1, score2, score3) => (score1 + score2 + score3)/3;
console.log(calcAverage(3,4,5))

//2
let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);

//3
const checkWinner = function (avgDolphins, avgKoalas) {
if (avgDolphins >= 2*avgKoalas) {
    console.log(`Dolphins win the trophy! | ${avgDolphins} vs ${avgKoalas}`);
} else if (avgKoalas >= 2*avgDolphins) {
    console.log(`Koalas win the trophy! | ${avgKoalas} vs ${avgDolphins}`);
} else{
    console.log('No team wins!');
}
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(20, 45);


// Test 2
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);


friends[2] = 'Jay';
console.log(friends);
//even though the array is a const, we can change it because it is not primitive data. We cannot replace the entire array though.

const firstName = 'Endrit';
const pixendrit = [firstName, 'Hyseni', 2022-1997, 'designer', friends];
console.log(pixendrit);

// Exercise
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years)); // NaN
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages)


//Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); //add an element at the end of the array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // put a new element at the beginning of the array
console.log(friends);

//Remove elements
friends.pop(); // Remove dhe last element - Bye Jay
const popped = friends.pop(); // bye Peter
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven')); // the index of an element
console.log(friends.indexOf('Bob')); // Bob does not exist

friends.push(23);
console.log(friends.includes('Steven')); // does it exist?
console.log(friends.includes('Bob')); // does it exist?
console.log(friends.includes('23')); // does it exist? - it tests strict equality ===

console.log(friends.includes(23)); // does it exist?

if (friends.includes('Steven')){
    console.log(`You have a friend called Steven`);
}
*/

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a *value* in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉


//1
// function calcTip(bill) {
//     if(bill >= 50 && bill<=300){
//         return 0.15*bill;}
//     else {
//         return 0.20*bill;
//     }
// }

/*
const calcTip = function(bill) {
    return bill >= 50 && bill<= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(calcTip(100));
*/

/*
//2
const bills = [125, 555, 44];

//3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips[0], tips[1], tips[2]);

//4
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(`${total}🫶`);
*/
/*

// this object has 5 properties
const jonas ={
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

// dot notation
console.log(jonas.lastName);
//bracket notation
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(jonas.interestedIn); Does not work because undefined. Should use the bracket notation because we can use any expression inside the brackets
console.log(jonas[interestedIn]); //this expression between the brackets will get evaluated.


if (jonas[interestedIn]) {
 console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);
*/


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     /* calcAge: function (birthYear) {  // any function that is attached to an object is called a method
//          return 2037 - birthYear;
//      }
//  */
//     /*    calcAge: function () {
//             // console.log(this);
//             return 2037 - this.birthYear;
//         }*/
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };
/*
 // This is how we used to do it before. this  is a function declaration and it doesn't work inside an object
 const calcAge =  function(birthYear) {
        return 2037-birthYear;
    }
*/

// console.log(jonas.calcAge());
//
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
//
//
// // Challenge
// // "Jonas is a 46-year old teacher, and he has a/no driver's license"
//
// console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and he has ${jonas.hasDriversLicense ? 'a' : 'no'} driver's license`);
// console.log(jonas.getSummary());

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
*/
/*

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}
mark.calcBMI();
john.calcBMI();
if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`);
} else {

    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`);
}
*/

// Iteration - The for loop


// console.log('Lifting weights repetition 1 🏋️');
// console.log('Lifting weights repetition 2 🏋️');
// console.log('Lifting weights repetition 3 🏋️');
// console.log('Lifting weights repetition 4 🏋️');
// console.log('Lifting weights repetition 5 🏋️');
// console.log('Lifting weights repetition 6 🏋️');
// console.log('Lifting weights repetition 7 🏋️');
// console.log('Lifting weights repetition 8 🏋️');
// console.log('Lifting weights repetition 9 🏋️');
// console.log('Lifting weights repetition 10 🏋️');

// for loop keeps running while condition is true
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}
*/
/*

// looping arrays
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i])

    // Filling types array
    /!*    types[i] = typeof jonasArray[i];*!/
    types.push(typeof jonasArray[i]);
    //either way works. issa matter of preference
}

console.log(types);


//filling another empty array using an expression
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('=== ONLY STRINGS ===')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue; //continue here actually just means skip, as in continue to the other iteration
    console.log(jonasArray[i], typeof jonasArray[i])
}

// log no other elements after we found a number
console.log('=== BREAK WITH NUMBER ===')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

*/


// Looping Backwards and Loops in Loops




