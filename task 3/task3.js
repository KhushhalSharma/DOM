// console.dir(document);

// console.log(document.URL);
// console.log(document.title);
document.title = "Vanilla Script";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

const headerTitle = document.getElementById("header-title");
// headerTitle.textContent = "List";
// headerTitle.innerText = "List1";
// headerTitle.innerHTML = '<h3>List3</h3>';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// console.log(headerTitle.innerHTML);

headerTitle.style.borderBottom = "3px solid #fff";

const addItems = document.getElementById("additem");
addItems.style.fontWeight = "bold";
addItems.style.color = "green";
