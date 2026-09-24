
let age = prompt('Enter your age');
// let alertMessage = (age < 18) ? 'You are Minor' : 'You are an adult'; //Using Ternary Operator
//let alertMessage =(age <= 10) ? 'Your age is less or equal to 10' : 'Your age is greater than 10'
let alertMessage = (age < 18) ? `Your age is ${age}. you are minor`: `Your age is ${age}. You are an adult`;
alert(alertMessage);

"sanja age is" + " " + age;
`sanjay age is ${age}`;