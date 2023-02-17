let header = document.querySelector("#main-header");
header.style.border = "6px solid red";

let input = document.querySelector("input");
input.value = "Hello World";

let submit = document.querySelector("input[type='submit']");
submit.value = "SEND";

let item = document.querySelector(".list-group-item");
item.style.color = "red";

let lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";

let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "blue";

// querySelectorAll;

let title = document.querySelectorAll(".title");
console.log(title);

for (i = 0; i < title.length; i++) {
  title[i].style.fontSize = "30px";
}
