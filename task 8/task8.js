let form = document.getElementById("addForm");
form.addEventListener("submit", myfunc);

let list = document.getElementById("items");
list.addEventListener("click", dltItems);

function myfunc(e) {
  e.preventDefault();
  let input = document.getElementById("item").value;
  let li = document.createElement("li");
  let deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  deleteButton.innerText = "X";
  li.className = "list-group-item";
  li.innerText = input;
  li.appendChild(deleteButton);
  list.appendChild(li);

  //   delete
}

function dltItems(e) {
  console.log("one");
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure")) {
      let li = e.target.parentElement;
      list.removeChild(li);
    }
  }
}
