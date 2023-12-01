console.log('my function practice file is working');

const myNamesArray = ['billy', 'bobby', 'mikey', 'jimmy', 'jane'];

const myEmptyArray = [];
const myNullArray = [null];

// length of an empty array is 0
console.log(myEmptyArray.length);
// length of array with one null value equals 1
console.log(myNullArray.length);
console.log('my null array', myNullArray);
console.log(myEmptyArray === myNullArray);

myNullArray.length = 0;

console.log('my null array now', myNullArray);

console.log(
    'is myEmptyArray truthy if it has one element?',
    myEmptyArray === true,
);

console.log(
    'is myEmptyArray truthy if I check for a length > 0?',
    myEmptyArray.length,
);

if (myEmptyArray) {
    console.log('what is this?');
} else {
    console.log('not whay i think it is');
}

for (const name of myNamesArray) {
    console.log(name);
}
