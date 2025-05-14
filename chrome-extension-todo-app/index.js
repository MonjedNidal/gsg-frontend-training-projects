let todos = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let localStorageTodos = JSON.parse(localStorage.getItem("todos"));

if (localStorageTodos) {
  todos = localStorageTodos;
  renderTodos();
}

inputBtn.addEventListener("click", function () {
  todos.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
});

const deleteTodo = (index) => {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
};

function renderTodos() {
  ulEl.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todos[i];

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "liBtn";
    deleteBtn.addEventListener("click", () => deleteTodo(i));

    li.appendChild(span);
    li.appendChild(deleteBtn);
    ulEl.appendChild(li);
  }
}
