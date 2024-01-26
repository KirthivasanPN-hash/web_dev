const allImages = document.getElementsByTagName("img");

for (let img of allImages) {
  img.src = "src.com";
}

// instead of manual writing inline onclick function we write
// a function and create a various buttons

const btn = document.querySelector("#b1");

btn.onclick = function () {
  console.log("you are selected");
  console.log("It will work");
};

function blow() {
  console.log("ERRRRR");
  console.log("STOP IT");
}

btn.onmouseenter = blow;

document.querySelector("h1").onclick = () => {
  alert("Hi there!");
};

function addNumbers(n1, n2) {
  return n1 + n2;
}

console.log(addNumbers(1, 2));

// innerHTML usecase
// retrives the html code by refering to the particular id

const check = document.getElementById("b1");
const currTag = check.innerHTML;
console.log(currTag);

//accessing a html tag and modifying it

const tagname = document.querySelector("tagname");

tagname.innerText = "change name";

// Attributes => we can access the tag name with tags in it

const name = document.querySelector("img");
img.src = "href";
img.alt = "text";

// CHANGE COLOR

// styles depend on the inline color

// we can do this by checking

// we can check the color by JS

const h1 = document.querySelector("h1");

h1.style.color;

h1.style.fontSize = "3em";

// for changing all styles:

for (let link of allLinks) {
  link.style.color = "rgb(0,108,134)";
}

// for checking the styles
const value = window.getComputedStyle(h1).color;
console.log(value);

// chaning the color if the classes of the particular list is Changed

const h1 = document.querSel;
classList.toggle("color/font");
