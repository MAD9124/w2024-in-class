class Pet {
  constructor(name, age, legCount) {
    this.name = name;
    this.age = age;
    this.legCount = legCount;
  }

  talk() {
    console.log(
      `My name is ${this.name} and I am ${this.age} years old, and I have ${this.legCount} legs`
    );
  }
}

class Dog extends Pet {
  walk() {
    console.log("I love chasing my tail");
  }
  talk() {
    console.log("bark");
  }
}

class Cat extends Pet {
  lives = 9;
  clean() {
    console.log("lick lick");
  }
}

const myPet = new Dog("dylan", 5, 4, "something");

const myOtherPet = new Pet("prescott", 0.3, 2, "something");

const myBrothersPet = new Dog("sirius", 3, 4, "something");

const mySistersPet = new Cat("luciano", 26, 4, "something");

// myPet.talk();
// myBrothersPet.talk();
// mySistersPet.talk();
// myOtherPet.talk();

// myPet.walk();
// myBrothersPet.walk();
// console.log(mySistersPet.lives);
// mySistersPet.lives = mySistersPet.lives - 1;
// console.log(mySistersPet.lives);
myPet.talk();
