var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

//console.log(pets);
fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});
fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});
pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});

var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var title = document.querySelector("h1");
var body = document.querySelector("body");

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    ball.classList.remove("move-right");
    body.classList.remove("light");
    title.innerText = "Stealth Quincy";
  } else {
    ball.classList.add("move-right");
    body.classList.add("light");
    title.innerText = "Party Quincy";
  }
});
