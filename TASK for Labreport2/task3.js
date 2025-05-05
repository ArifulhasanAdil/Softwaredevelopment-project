// Abstract class
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate an abstract class.");
    }
  }

  calculateArea() {
    throw new Error("Abstract method 'calculateArea' must be implemented.");
  }
}

// Interface (implemented using a mixin pattern in JavaScript)
const Drawable = {
  draw() {
    throw new Error("Method 'draw' must be implemented.");
  }
};

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  draw() {
    console.log(`Drawing a circle with radius ${this.radius}`);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  draw() {
    console.log(`Drawing a rectangle of width ${this.width} and height ${this.height}`);
  }
}

// Example Usage
const circle = new Circle(5);
console.log(`Circle Area: ${circle.calculateArea()}`); //A=pi*R*R
circle.draw(); // it prints: drawing a circle with radius 5

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
rectangle.draw(); // it prints: drawing a rectsngle of width 4 and height 6
