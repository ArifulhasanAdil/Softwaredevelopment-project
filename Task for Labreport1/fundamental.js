console.log("i am adil");
///Variable Declaration
// let: Allows reassignment, block-scoped.
let age = 25; 
//const: Constants, cannot be reassigned, block-scoped.
const name = "Adil";
var isStudent = true; // boolean
///Data Types
let id = 112; // number
const sName = "adil"; // string
var isPresent = true; // boolean
const person = 
{
    firstName: "Adil",
    lastName: "Khan",
    age: 21
};// object
let team = ["towhid", "faruk"]; // array
console.log(id);
console.log(sName);
console.log(person);
console.log("TEAM MEMBER:")
console.log(team);
///Type Conversion
//Using parseInt(): Converts a string to an integer.
let value = "42";
let result = parseInt(value);
console.log(result);
//Using parseFloat(): Converts a string to a floating-point number.
let x = "3.14";
let aa = parseFloat(x);
console.log(aa);
//Using Number(): Converts a string or boolean to a number.
let y= "123";
let num = Number(y);
console.log(num); 
//Using String(): Converts a number or boolean to a string
let z = 55;
let str = String(z);
console.log(z);

// Type Conversion and operators
let numString = "50";
let convertedNum = parseInt(numString);
console.log(`Converted Number: ${convertedNum}`); // Output: Converted Number: 50

// Arithmetic Operators
let sum = convertedNum + 10;
console.log(`Sum: ${sum}`); // Output: Sum: 60

// Logical and Comparison Operators
let isGreater = sum > 55 && sum < 65;
console.log(`Is Sum Between 55 and 65? ${isGreater}`); // Output: true



