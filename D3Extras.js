// Additional assignments for Day 3

/* EXTRA 1
 Write a piece of code for finding the longest of two given strings.
*/

let s1 ="longerString";
let s2 ="String";
let longest;
if (s1.length > s2.length) {longest = "longerString"} else {longest = "String"};
console.log(longest);

/* EXTRA 2
 Write a piece of code for finding the average of two given number.
*/

let x = 4;
let y = 8;
let n = 2;
average = (x + y) / n;
console.log(average);

/* EXTRA 3
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let c = 400;
let per = 20;
percentage = (c * (per / 100 ));
console.log(percentage);


/* EXTRA 4
Given two numbers a and b, write a piece of code for checking if:
    a OR b is equal to 8 OR
    a + b is equal to 8 OR
    a - b is equal to 8
*/

let a = 4;
let b = 6;
console.log ((a || b) == 8);
console.log (a + b == 8);
console.log (a - b == 8);


/* EXTRA 5  
 Create a boolean variable called isMale asign to it the value true or false.
 Crate a variable called gender.
 Using a ternary operator, assign to the variable gender, either "male" or "female" based on the value of isMale.
*/

let isMale = false;
let gender;
if (isMale = true) {gender = "male"} else {gender = "female"};
console.log(gender);
// Don't know how to get outcome of female???

/* WHEN YOU ARE FINISHED
 Upload the .js file to EPICODE LMS before 5PM CET.
*/