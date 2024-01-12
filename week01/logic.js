const tim = {
  name: "tim",
  age: 32,
  title: "instructor",
};

// if (tim.age < 30) {
//   console.log("you are still young");
// } else {
//   console.log("oh no, im old");
// }

// const insultMaybe = (age) => {
//     if (age < 13) {
//       console.log("you are a kid");
//     } else if (age < 20) {
//       console.log("you are a teenager");
//     } else if (age < 30) {
//       console.log("you are still young");
//     } else {
//       console.log("oh no, im old");
//     }

//     console.log('i still love you')
//   };

const insultMaybe = (age) => {
  if (age < 13) {
    console.log("you are a kid");
    return;
  }
  if (age < 20) {
    console.log("you are a teenager");
    return;
  }
  if (age < 30) {
    console.log("you are still young");
    return;
  }
  console.log("oh no, im old");
};

// insultMaybe(52);
//              logic        ?  truthy               : falsey
const message = tim.age < 30 ? "you are still young" : "oh no, im old";
// console.log(message)

// equals === / ==
// console.log("1" === 1);
// console.log("1" == 1);

// greater than >
// less than <
// greater than or equal >=
// less than or equal <=
// console.log('jim' < 'tim')

// AND &&
// console.log(true && true)    true
// console.log(true && false)   false
// console.log(true && true)    false
// console.log(false && false)  false
// console.log(3 > 1 && 'tim' === 'tim' && Date.now() === Date.now())

// OR ||
// console.log(true || false)   true
// console.log(false || true)   true
// console.log(true || true)    true
// console.log(false || false)  false
// console.log(3 > 1 || 'tim' === 'tim' || Date.now() === Date.now())

// console.log(((true && true) || (false || true) ) && true)

const something = 0 || false || "" || undefined || null || "tim";
// console.log(something);

const something2 = undefined ?? null ?? false ?? 'tim'
// console.log(something2)

const obj = {
    inner: {
        foo: {
            bar: 'baz'
        }
    }

}

console.log(obj?.inner?.test?.bar)