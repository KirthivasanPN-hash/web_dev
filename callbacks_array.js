// reduce is important so try to understand that
// understanding the new arrow function

// for each
// Map
// filter
// find
// reduce
// some
// every

// for each

// const Google_swe = [
//   {
//     title: "Software engineer 2",
//     score: 1,
//   },
//   {
//     title: "Software engineer 3",
//     score: 2,
//   },
//   {
//     title: "Senior Software engineer",
//     score: 3,
//   },
// ];

// Google_swe.forEach(function (roles) {
//   console.log(`${roles.title} - ${roles.score}`);
// });

// // map

// // creating a new array with the results of calling
// // a callback on every element in the array

// const numbers = [1, 2, 3, 4, 5];

// const sq_val = numbers.map(function (num) {
//   return num * 2;
// });

// // google_swe example

// const rolezz = Google_swe.map(function (roles) {
//   return roles.title.toUpperCase();
// });

// // using arrow functions

// const rolezz_a = Google_swe.map((roles) => roles.title.toUpperCase()); //no need to use return statement

// const hire_intern = function process_complete(num) {
//   return num >= 9;
// };

// // here in the above eg we need a fucntion name to define it
// // but to use without that we can simply use the arrow function

// const hire = (num) => {
//   return num >= 5;
// };

// hire();

// // implicit function provides cleaner code

// const DieRoll = () => Math.floor(Math.ranodom() * 6) + 1;

// // just implict one liner

// const randd = (num) => Math.floor(Math.random() * 1000) + 1;

// setting timere on callbacks

// setTimeout(console.log("Hired"), 3000); // this exceutes without the timer

setTimeout(() => {
  console.log("accept cookies");
}, 3000);

const st = setInterval(() => {
  console.log(Math.random());
}, 2000);

// now keep a start pointer we can assign a variable
// clear ionterval stops it ===> clearInterval(st)

// filter function

const filter_tops = rolezz.filter((f) => f.score > 2);
const filter_gg = filter_tops.map((f = f.title));

// combining this into one syntax
const filter_scores = (f = f.score > 1).map((f) => f.score);

// every and some definition

const exam_score = [78, 89, 90, 70, 91, 95];

exam_score.every((score) => score >= 89);

// atleast some exists

const exam_marks = [78, 89, 90, 70, 91, 95];

exam_marks.some((em) => {
  return em > 89;
});

exam_score.some((sc) => sc >= 89);

// can also be used for google_swe

// (should read more)
// reduce function

const prices = [9.99, 1.5, 19.99, 49.99];

let total = 0;
for (let price of prices) {
  total += price;
}
console.log(total);

//using reduce

prices.reduce((total, price) => {
  return total + price;
});

const person = {
  fname: "red",
  lname: "bull",
  fullname: () => {
    return `${this.fname} ${this.lname}`;
  },
  shoutName: function () {
    setTimeout(() => {
      // function (){} --> this keyword behaves differently
      console.log(this);
      console.log(this.fullname());
    }, 3000);
  },
};
