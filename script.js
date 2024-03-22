const enterBtn = document.getElementById("enter");
const input = document.getElementById("user_input");
const ul = document.querySelector("ul");
const items = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

console.log(items.length);

function createListEl() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function crossOut() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossOut);

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
    setTimeout(function () {
      li.style.display = "none";
    }, 500);
  }
}

function addListAfterAClick() {
  if (inputLength() > 0) {
    createListEl();
  }
}

enterBtn.addEventListener("click", addListAfterAClick);

input.addEventListener("keypress", () => {
  if (inputLength() > 0 && event.which === 13) {
    createListEl();
  }
});
