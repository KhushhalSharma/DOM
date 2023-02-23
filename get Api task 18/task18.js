let form = document.querySelector("form").addEventListener("submit", myfun);
async function myfun(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;

  let user = {
    name,
    email,
  };

  try {
    let res = await axios.post(
      "https://crudcrud.com/api/52c8e285f71b4288be9e29f548fe7277/user",
      {
        user,
      }
    );
    alert("Users Added");

    addData(res);
  } catch (error) {
    console.log("error:", error);
    alert("Action Failed");
  }
  name = "";
  email = "";
}

function addData(data) {
  let div = document.createElement("div");
  let del = document.createElement("button");
  let edit = document.createElement("button");
  del.innerText = "Delete";
  edit.innerText = "Edit";
  div.className = "user";
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  h1.innerText = data.data.user.name;
  p.innerText = data.data.user.email;
  div.append(h1, p, del, edit);
  document.querySelector("body").append(div);
}

async function getUser() {
  try {
    let res = await axios.get(
      "https://crudcrud.com/api/52c8e285f71b4288be9e29f548fe7277/user"
    );
    console.log(res.data);
    displayData(res.data);
  } catch (error) {
    console.log("error:", error);
  }
}

getUser();

function displayData(data) {
  data.forEach((el) => {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    h1.innerText = `Name :- ${el.user.name}`;
    p.innerText = `Email :- ${el.user.email}`;
    let deleteBtn = document.createElement("button");
    let edit = document.createElement("button");
    div.append(h1, p, deleteBtn, edit);
    document.querySelector("body").append(div);
  });
}
