// DOM elements
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask(taskText) {
    // TODO: Implement the logic to add a new task to the tasks array
    // Use SweetAlert to confirm the addition
}

// Function to update an existing task
function updateTask(taskId, newText) {
    // TODO: Implement the logic to update the text of an existing task
    // Use SweetAlert to confirm the update
}

// Function to delete a task
function deleteTask(taskId) {
    // TODO: Implement the logic to delete a task from the tasks array
    // Use SweetAlert to confirm the deletion
}

// Function to toggle a task's completion status
function toggleTaskCompleted(taskId) {
    // TODO: Implement the logic to toggle the completion status of a task
    // Use SweetAlert to confirm the action (completed or reopened)
}

// Function to render the tasks on the page
function renderTasks() {
    // TODO: Implement the logic to render the tasks on the page
    // Update the task list in the DOM based on the tasks array
}

// Event listener for adding a new task
addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        newTaskInput.value = ''; // Reset the input field
    } else {
        // TODO: Use SweetAlert to show an error message if the task description is empty
    }
});

// Event listener for task actions (edit, delete, toggle completion)
taskList.addEventListener('click', (e) => {
    const target = e.target;
    const taskId = target.closest('.task-item')?.dataset.id;

    if (taskId) {
        if (target.classList.contains('edit')) {
            // TODO: Trigger the edit task logic
        } else if (target.classList.contains('delete')) {
            // TODO: Trigger the delete task logic
        } else if (target.classList.contains('toggle-completed')) {
            // TODO: Trigger the toggle completion logic
        }
    }
});
