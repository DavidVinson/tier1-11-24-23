console.log('my statement');

const b = false;
const myName = 'Dave';
const MY_STRING = `this is ${myName}'s string`;
// if (b) {
//   console.log(MY_STRING);
// } else {
//   console.log('this is not my string');
// }

const myString = b ? MY_STRING : 'this is not my string';
console.log(myString);
