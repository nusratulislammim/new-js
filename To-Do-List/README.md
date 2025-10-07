# To-Do List

[task-01](https://docs.google.com/document/d/1vmtx7wwR3WqcsKdHq7RKRHx3oJrmO8ukrfNU3HzJ-UI/edit?tab=t.0)

## Solution Code
### index.html
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="to-do-container">
    <h2>To-Do List</h2>
    <input type="text" id="taskInput" placeholder="Add a task">
    <button id="addBtn">Add</button>
    <ul id="tasklist"></ul>
  </div>

  <script src="script.js"></script>
</body>
</html>

```

### style.css
```css
body {
  font-family: Arial, sans-serif;
  background: #f4efef;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.to-do-container {
  background: rgb(155, 108, 108);
  padding: 20px;
  border-radius: 10px;
  width: 320px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h2 {
  text-align: center;
  color: rgb(255, 251, 231);
}

input {
  width: 70%;
  padding: 8px;
}

button {
  padding: 8px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  margin: 5px 0;
  padding: 5px 10px;
  border-radius: 5px;
}

.left-part {
  display: flex;
  align-items: center;
  gap: 10px;
}

.completed span {
  text-decoration: line-through;
  color: gray;
}

```

### script.js
```javascript
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

```