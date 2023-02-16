// const singleItem = document.getElementsByClassName("singleList");
// singleItem[0].style.color = "green";

// const li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[4]);

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }
// li[4].style.border = "1px solid rgba(0,0,0,.125)";
// li[4].style.listStyleType = "none";

let item = document.getElementsByTagName("li");
// console.log(item);
// console.log(item[0]);

for (let i = 0; i < item.length; i++) {
  //   console.log(item[i]);
  item[i].style.color = "blue";
  item[i].style.fontSize = "22px";
}

item[4].style.border = "1px solid red";
item[4].style.height = "50px";
item[4].style.listStyleType = "none";


