let items = document.getElementsByClassName("list-group-item");

// console.log(items);

items[0].textContent = "List 1";
items[1].textContent = "List 2";
items[2].textContent = "List 3";
items[3].textContent = "List 4";

items[0].style.color = "white";
items[0].style.fontSize = "20px";
items[0].style.backgroundColor = "red";
items[1].style.color = "green";
items[2].style.color = "blue";
items[2].style.fontSize = "20px";
items[3].style.color = "brown";

for (let i = 0; i < items.length; i++) {
  //   console.log(items[i]);
  items[i].style.fontWeight = "bold";
}
