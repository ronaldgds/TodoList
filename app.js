const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const resetButton = document.getElementById("reset");
const taskList = document.getElementById("task-list");
let completedTasks = 0;

function addTask() {
	const taskText = newTaskInput.value;
	const newTaskItem = document.createElement("li");

	const newTaskCheckbox = document.createElement("input");
	newTaskCheckbox.type = "checkbox";
	newTaskCheckbox.addEventListener("click", toggleTask);

	newTaskItem.appendChild(newTaskCheckbox);
	newTaskItem.appendChild(document.createTextNode(taskText));
	taskList.appendChild(newTaskItem);
	newTaskInput.value = "";

	console.log("Adicionei");
}

function toggleTask(event) {
	const checkbox = event.target;
	const taskItem = checkbox.parentElement;

	if (checkbox.checked) {
		taskItem.classList.add("completed");
	} else {
		taskItem.classList.remove("completed");
	}
}

function resetTasks() {
	const completedTasks = taskList.querySelectorAll(".completed");
	completedTasks.forEach(function (task) {
		task.remove();

		console.log("Resetei");
	});
}

addTaskButton.addEventListener("click", addTask);

resetButton.addEventListener("click", resetTasks);
