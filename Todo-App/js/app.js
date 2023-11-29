const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addButton = document.getElementById("add-button");
const editButton = document.getElementById("edit-button");
const alertMessage = document.getElementById("alert-message");
const todoBody = document.querySelector("tbody");
const deletAllButton = document.getElementById("delete-all-button");
const filterButton = document.querySelectorAll(".filter-todos");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const genrateId = () => {
  return Math.round(Math.random() * Math.pow(10, 15)).toString();
};

const showAlert = (message, type) => {
  alertMessage.innerHTML = "";
  const alert = document.createElement("p");
  alert.innerText = message;
  alert.classList.add("alert");
  alert.classList.add(`alert-${type}`);
  alertMessage.append(alert);

  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
};

const saveToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const displayTodos = (data) => {
  const todoList = data || todos;
  todoBody.innerHTML = "";
  if (!todoList.length) {
    todoBody.innerHTML = "<tr><td colspan = '4' >No task found!</td></tr>";
    return;
  }
  todoList.forEach((todo) => {
    todoBody.innerHTML += `
    <tr>
    <td>${todo.task}</td>
    <td>${todo.date || " No Date"}</td>
    <td>${todo.completed ? "completed" : "Pending"}</td>
    <td>
    <button onclick = "editHandler('${todo.id}')">Edit</button>
    <button onclick = "toggleHandler('${todo.id}')">${
      todo.completed ? "Undo" : "Do"
    }</button>
    <button onclick = "deleteHandler('${todo.id}')">Delete</button>
    </td>
    </tr>
    `;
  });
};
const addHandler = () => {
  const task = taskInput.value;
  const date = dateInput.value;
  const todo = {
    id: genrateId(),
    task,
    date,
    completed: false,
  };
  if (task) {
    todos.push(todo);
    saveToLocalStorage();

    taskInput.value = "";
    dateInput.value = "";
    showAlert("Todo added successdully", "success");
  } else {
  }
};

const deleteAllHandler = () => {
  if (todos.length) {
    todos = [];
    saveToLocalStorage();
    displayTodos();
    showAlert("All todos cleared successfully!", "success");
  } else {
    showAlert("No todos to clear", "error");
  }
};

const deleteHandler = (id) => {
  const newTodos = todos.filter((todo) => todo.id !== id);
  todos = newTodos;
  saveToLocalStorage();
  displayTodos();
  showAlert("todos deleted successfully!", "success");
};

const toggleHandler = (id) => {
  // const newTodos = todos.map((todo) => {
  //   if (todo.id === id) {
  //     // return {
  //     //   id: todo.id,
  //     //   task: todo.task,
  //     //   date: todo.date,
  //     //   completed: !todo.completed,
  //     // };
  //     return {
  //       ...todo,
  //       completed: !todo.completed,
  //     };
  //   } else {
  //     return todo;
  //   }
  // });
  // todos = newTodos;

  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  saveToLocalStorage();
  displayTodos();
  showAlert("todo status successfully!", "success");
};

const editHandler = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  taskInput.value = todo.task;
  dateInput.value = todo.date;
  addButton.style.display = "none";
  editButton.style.display = "inline-block";
  editButton.dataset.id = id;
};

const applyEditHandler = (event) => {
  const id = event.target.dataset.id;
  const todo = todos.find((todo) => todo.id === id);
  todo.task = taskInput.value;
  todo.date = dateInput.value;
  taskInput.value = "";
  dateInput.value = "";
  addButton.style.display = "inline-block";
  editButton.style.display = "none";
  saveToLocalStorage();
  displayTodos();
  showAlert("todo edited successfully!", "success");
};

const filterHandler = (event) => {
  let filterTodos = null;
  const filter = event.target.dataset.filter;
  switch (filter) {
    case "pending":
      filterTodos = todos.filter((todo) => todo.completed === false);
      break;
    case "completed":
      filterTodos = todos.filter((todo) => todo.completed === true);
      break;
    default:
      filterTodos = todos;
      break;
  }
  displayTodos(filterTodos);
};

window.addEventListener("load", () => displayTodos());
addButton.addEventListener("click", addHandler);
deletAllButton.addEventListener("click", deleteAllHandler);
editButton.addEventListener("click", applyEditHandler);
filterButton.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
