console.log('my statement');

const b = false;
const myName = 'Dave';
const MY_STRING = `this is ${myName}'s string`;
const myArray = [1, 3, 4, 5];
// if (b) {
//   console.log(MY_STRING);
// } else {
//   console.log('this is not my string');
// }

const myString = b ? MY_STRING : 'this is not my string';
console.log(myString);

const objLit = {foo: 'bar'};

// function declarations are hoisted, and can be used anywhere in the file
myOtherFun();

// function expressions cannot be used before they are created
myFun();
const myFun = () => console.log('myfun!');

// this function is created here, but used earlier in the file
//this is because function declarations are "hoisted".
function myOtherFun() {
    console.log('myOther fun!');
}
