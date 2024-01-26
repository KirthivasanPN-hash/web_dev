// // imp

// // crucial

// // spread with arrays
// // spread with objects
// // destructing

// // important

// // default Params
// // spread in fucntion calls
// // rest params

// // 1. default params:

// function mulitply(a, b) {
//   b = typeof b !== "undefined" ? b : 1;
//   return a * b;
// }

// mulitply(7);
// multiply(7, 3);

// // bascially testing the base case

// function rollDie(num) {
//   if (num === undefined) {
//     num === 6;
//   }
// }

// // 2. spread with arrays

// //Spread syntax allows an iterable such as array to be expanded in places
// // where 0 or more arguments (for function calls) or elements are expected.

// //

// nums = [12, 23, 4, 5, 678, 789, 1234];

// // bascially spreding the array which takes as separate argument
// Math.max(...nums);

// //can also use for non-array attributes

// console.log(..."hello");

// //3. Spread with array literals

// //spread with literals // same thing

// //4 copying objects using spread

// const hiring_team = { position: swe, level: 4 };
// const hired = { position: swe2, level: 3 };

// {...[1,2,3,4]}

// copying a objects a lot will be useful in react rather mutating them

/////Eg:

const googleForms = {
  email: "holycow69@gmail.com",
  password: "69times69",
  username: "Saani",
};

// now just copying the data

const newUser = { ...googleForms, id: 9875, isAdmin: false };

// available inside every fucntion
// array-like object
// not inside arrow function

function sum() {
  return arguments.reduce((total, el) => total + el);
}

// ^^^^ above indicates that arguments.reduce is not function

// instead

function sumsa(...nums) {
  return nums.reduce((total, el) => total + el);
}

// Destructing arrays

// assigning values in arrays

const user2 = {
  email: "Davechicken@gmail.com",
  firstName: "Kumar",
  LastName: "Loki",
};

// here we can assign values if the field is not defined
// but already defined then it is hard

// calling it by:

const { email, firstName, LastName, password = "N/A" } = user2;

// destructing params

movies.map(({ title, score, year }) => {
  return `${title} (${year} is rated ${score}`;
});
