let items = document.querySelector("#items");
// console.log(items.parentNode);

items.parentNode.style.backgroundColor = "red";
// console.log(items.parentNode.parentNode);

items.parentNode.parentNode.style.color = "blue";

// childern

// console.log(items.childNodes);
// console.log(items.children);
// console.log(items.children[1]);
items.children[1].style.fontSize = "30px";

// firstChild
// console.log(items.firstChild);
// console.log(items.firstElementChild);
items.firstElementChild.textContent = "Khushhal";
items.lastElementChild.textContent = "Khushhal";

// nextSiblings
// console.log(items.nextSibling);
// console.log(items.nextElementSibling);

// perviousSiblings
// console.log(items.previousElementSibling);

// CreateElement

let div = document.createElement("div");
div.className = "NewDivClass";
div.id = "NewDivID";
div.setAttribute("title", "Khushhal");

let text = document.createTextNode("Hello World");
div.appendChild(text);

let conatiner = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

conatiner.insertBefore(div, h1);

console.log(div);
