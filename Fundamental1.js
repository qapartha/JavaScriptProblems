// Values and Variables﻿
// Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.


let country = 'India';
let continent ='Asia';
let population = 1.3
console.log(country, continent, population+' Millions')
let c =
{
    name: 'something'
}
let b= c
b.name = 'something else'
console.log(b)
console.log(c)

// Template Literals
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

if (BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

