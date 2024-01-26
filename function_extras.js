// let input = prompt("Hey! there enter something!")

// while(true){
//     input = prompt(input);
//     if(input === "stop copying me!"){

//         break;
// }
//     }

// console.log("you win!")

///////////////////////////////////////////// guessing game /////////////////////////////////////

// let max = parseInt(prompt("Enter a maximum no:"));

// while (true) {
//   while (!max) {
//     max = parseInt(prompt("enter a valid number!"));
//   }

//   const targetnum = Math.floor(Math.random() * max) + 1; // made a mistake by intializing let instead of const

//   console.log(targetnum);

//   let guess = prompt("enter your guess:");

//   let attempts = 1;

//   while (parseInt(guess) !== targetnum) {
//     if (guess === "q") break;
//     attempts++;
//     if (guess > targetnum) {
//       guess = parseInt(
//         prompt("It is larger the target num! Enter a new guess:")
//       );
//     } else {
//       guess = parseInt(
//         prompt("It is smaller the target num! Enter a new guess:")
//       );
//     }
//   }

//   if (guess === "q") {
//     guess = prompt("That's tiring! You wanna try again? (y/n)"); // Prompt for input
//     if (guess !== "y") {
//       break; // Exit the main loop if the user doesn't want to play again
//     }
//   } else {
//     console.log("You win, it took you ${attempts} guesses");
//   }
// }

// console.log("Thanks for playing!");

/////////////////////////////////////////////////////////

// function callTwice(func) {
//   func();
//   func();
//   // small illustration of an example for call twice
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDie);

// /// function call

// // example of calling it 10 times

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// callTenTimes(rollDie);

// this is calling another fucntion but the value can be just printed
// maek sure you understand what you learn proeperly
// just clean code

// Higher order functions

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("Visa slot is booked");
//       console.log("try again");
//     };
//   } else {
//     return function () {
//       alert("you have been banned from doing this task!!");
//       alert("try again");
//       alert("nope! try later!");
//     };
//   }
// }

// here it returns random funct that why return as a funct itself

/// function that generates a function based on the input

// function in_range(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// So, I can basically assign this function to a constant and make it factory function
// so main purpose is setting a common range and checking if that's possible for other consts accordingly

// every methods is function but not the vice versa

const emp = {
  name: "Kirthi",
  role: "data science intern",
  company: "tesla",
  recruit() {
    console.log("search for this", this);
    console.log(`${this.name} match found`);
  },
};

const intern = emp.recruit;

// here the window is a top level object

// try catch block

function throws(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log("Please pass a string next time! ");
  }
}
