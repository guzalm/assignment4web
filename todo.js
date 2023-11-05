// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  var taskList = document.getElementById("taskList");

  var taskItem = document.createElement("li");

  // Create a checkbox
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  taskItem.appendChild(checkbox);

  // Create the task label
  var label = document.createElement("label");
  label.textContent = taskText;
  taskItem.appendChild(label);

  // Add event listener to mark tasks as complete
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
    }
  });

  // Create a delete button
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });
  taskItem.appendChild(deleteButton);

  // Add the task item to the list
  taskList.appendChild(taskItem);

  taskInput.value = ""; // Clear the input field
}
