// Function declaration
function sum(a, b) {
    return a + b;
}

// Arrow function
const sumnumArrow = (a, b) => a + b;

console.log(sum(11, 10)); // Output: 21
console.log(sumnumArrow(5, 10)); // Output: 15
///conditional 
const checkEvenOdd = (num) => {
    if (num % 2 === 0) 
    {
        console.log(`${num} is even.`);
    }
    else
    {
        console.log(`${num} is odd.`);
    }
};
checkEvenOdd(7); // Output: 7 is odd.
checkEvenOdd(12); // Output: 12 is even.

///Loops Using a for loop to print numbers from 1 to 10:
for (let i = 1; i <= 10; i++)
 {
    console.log(i);
}
