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
      "https://crudcrud.com/api/0f24ec7f4fc14a5395406016365df777/user",
      {
        user,
      }
    );
    alert("Users Added");
    getUser();
  } catch (error) {
    console.log("error:", error);
    alert("Action Failed");
  }
  name = "";
  email = "";
}

async function getUser() {
  try {
    let res = await axios.get(
      "https://crudcrud.com/api/0f24ec7f4fc14a5395406016365df777/user"
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
    div.className = "user";
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    h1.innerText = `Name :- ${el.user.name}`;
    p.innerText = `Email :- ${el.user.email}`;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "DELETE";
    deleteBtn.onclick = () => {
      deleteUser(el._id);
    };
    let edit = document.createElement("button");
    edit.innerText = "Edit";
    div.append(h1, p, deleteBtn, edit);
    document.querySelector("body").append(div);
  });
}

async function deleteUser(obj) {
  console.log(obj);
  try {
    let res = await axios.delete(
      `https://crudcrud.com/api/0f24ec7f4fc14a5395406016365df777/user/${obj}`
    );
    confirm("Are You Sure");
    window.location.reload();
  } catch (error) {
    console.log("error:", error);
  }
}
