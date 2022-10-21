document.addEventListener("DOMContentLoaded", () => {
  taskForm.addEventListener("submit", createNewTask)
});

const taskForm = document.getElementById("create-task-form");
const newTaskDescription = document.getElementById("new-task-description");
const newTask = document.getElementById("tasks");
const newTaskPriority = document.getElementById("new-task-priority");

const createNewTask = e => {
  e.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  e.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};

let button = document.createElement("button");

  button.textContent = 'x';
  li.appendChild(button);