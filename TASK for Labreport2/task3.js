// Define the Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to print a greeting message
    greet() {
        console.log(`Hi Assalumalaikum, My name is ${this.name}, and I am ${this.age} years old.`);
    }
}

// Create an object of the Person class
const person1 = new Person('Adil', 21);
// Call the greet() method
person1.greet(); // Output: Hi Assalumalaikum, my name is adil, and I am 21 years old.