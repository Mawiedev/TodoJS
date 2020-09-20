const addListBtn = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const addTodo = document.querySelector(".todo-list");

addListBtn.addEventListener("click", addTodoItem);
addTodo.addEventListener("click", buttonTodoItem);

function addTodoItem(e) {
  e.preventDefault();
  console.log(todoInput.value);

  if (todoInput.value.length != 0) {
    const newTodo = document.createElement("li");
    newTodo.className = "todo";

    const delTodo = document.createElement("button");
    delTodo.innerHTML = `<i class="fas fa-trash"></i>`;
    delTodo.className = "del-btn";

    const editTodo = document.createElement("button");
    editTodo.innerHTML = `<i class="fas fa-check"></i>`;
    editTodo.className = "edit-btn";

    const divButton = document.createElement("div");
    divButton.className = "div-button";

    const divTextTodo = document.createElement("div");
    divTextTodo.className = "div-text-todo";
    divTextTodo.innerHTML = `<p>${todoInput.value}</p>`;

    newTodo.appendChild(divTextTodo);
    addTodo.appendChild(newTodo);
    newTodo.appendChild(divButton);
    divButton.appendChild(editTodo);
    divButton.appendChild(delTodo);

    todoInput.value = "";
  }
}

function buttonTodoItem(e) {
  const itemParent = e.target.parentElement.parentElement;
  const item = e.target;

  if (item.className === "del-btn") {
    itemParent.remove();
  } else if (item.className === "edit-btn") {
    if (itemParent.className === "todo done") {
      itemParent.classList.remove("done");
    } else {
      itemParent.classList.add("done");
    }
  }
}
