// class way
class MyClass {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`Hello world from ${this.name}`);
  }
}

// Functional way

function MyObj(name) {
  this.name = name;
}

const myPrototype = {
  hello: function () {
    console.log(`Hello world from ${this.name}`);
  },
};

Object.assign(MyObj.prototype, myPrototype);

const cl = new MyClass("vincent");
cl.hello();
const obj = new MyObj("tim");
obj.hello();
