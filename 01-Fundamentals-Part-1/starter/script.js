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
*/

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