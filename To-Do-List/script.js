const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const tasklist = document.getElementById('tasklist');

addBtn.addEventListener('click', function() {
  const task = taskInput.value.trim();
  

  const li = document.createElement("li");
  const leftPart = document.createElement("div");
  leftPart.className = "left-part";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";

  checkbox.addEventListener("change", function() {
    li.classList.toggle("completed", checkbox.checked);
  });

  deleteButton.addEventListener("click", function() {
    li.remove();
  });

  leftPart.appendChild(checkbox);
  leftPart.appendChild(span);
  li.appendChild(leftPart);
  li.appendChild(deleteButton);

  tasklist.appendChild(li);
  taskInput.value = "";
});
