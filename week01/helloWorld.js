const constant = "cannot be changed";
let variable = "can be changed";

// constant = "change";
variable = "change";

console.log("constant", constant);
console.log("variable", variable);

const string = "asdf";
const number = 123;
const boolean = true;
const array = [];
const object = {
  key: "value",
};
console.log(object.key);

// Parent class
class Pet {
  name;
  age;
  numberOfLegs;

  constructor(name, age, numberOfLegs) {
    this.name = name;
    this.age = age;
    this.numberOfLegs = numberOfLegs;
  }
}

// Dont Repeat Yourself!!!
// child class
class Dog extends Pet {
  bark() {
    console.log("Bark!");
  }
}

//alt shift down-arrow

// child class
class Cat extends Pet {
  meow() {
    console.log(this.name + " says Meow!");
  }
}

const dylan = new Dog("dylan", 5, 4);
const artemus = new Cat("artemus", 3, 4);

console.log("dylan", dylan);
console.log("artemus", artemus);

dylan.bark();
artemus.meow();
