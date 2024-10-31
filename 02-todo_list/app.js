// Récupération des éléments du DOM
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

// Tableau pour stocker les tâches
let tasks = [];

// Fonction pour ajouter une nouvelle tâche
function addTask(taskText) {
    const task = {
        id: Date.now().toString(),
        text: taskText,
        completed: false
    };
    tasks.push(task);
    renderTasks();

    // SweetAlert pour confirmer l'ajout
    Swal.fire({
        title: 'Task Added!',
        text: `You have added a new task: "${taskText}"`,
        icon: 'success',
        confirmButtonText: 'Nice!'
    });
}

// Fonction pour mettre à jour une tâche existante
function updateTask(taskId, newText) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].text = newText;
    renderTasks();

    // SweetAlert pour confirmer la mise à jour
    Swal.fire({
        title: 'Task Updated!',
        text: `Task updated to: "${newText}"`,
        icon: 'info',
        confirmButtonText: 'Got it!'
    });
}


// Fonction pour supprimer une tâche
function deleteTask(taskId) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            tasks = tasks.filter(task => task.id !== taskId);
            renderTasks();

            // SweetAlert pour confirmer la suppression
            Swal.fire(
                'Deleted!',
                'Your task has been deleted.',
                'success'
            );
        }
    });
}

// Fonction pour marquer une tâche comme terminée
function toggleTaskCompleted(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    renderTasks();

    // SweetAlert pour confirmer l'achèvement
    Swal.fire({
        title: tasks[taskIndex].completed ? 'Task Completed!' : 'Task Reopened!',
        text: tasks[taskIndex].completed ? 'You have completed this task.' : 'This task has been reopened.',
        icon: tasks[taskIndex].completed ? 'success' : 'info',
        confirmButtonText: 'Ok'
    });
}

// Fonction pour rafraîchir l'affichage des tâches
function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.dataset.id = task.id;
        li.innerHTML = `
            <span>${task.text}</span>
            <div class="task-actions">
                <button class="toggle-completed">${task.completed ? '&#x2714;' : '&#x2705;'}</button>
                <button class="edit">✏️</button>
                <button class="delete">🗑️</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Gestionnaire d'événements pour le bouton d'ajout de tâche
addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        newTaskInput.value = ''; // Réinitialiser le champ de saisie
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Task description cannot be empty.',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
    }
});

// Gestionnaire d'événements pour les actions de tâche (édition, suppression, etc.)
taskList.addEventListener('click', (e) => {
    const target = e.target;
    const taskId = target.closest('.task-item').dataset.id;

    if (target.classList.contains('edit')) {
        // Utilisation de SweetAlert pour l'édition
        Swal.fire({
            title: 'Edit Task',
            input: 'text',
            inputLabel: 'Update your task text:',
            inputValue: target.closest('.task-item').querySelector('span').innerText,
            showCancelButton: true,
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            inputValidator: (value) => {
                if (!value) {
                    return 'Task text cannot be empty!';
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                updateTask(taskId, result.value.trim());
            }
        });
    } else if (target.classList.contains('delete')) {
        deleteTask(taskId);
    } else if (target.classList.contains('toggle-completed')) {
        toggleTaskCompleted(taskId);
    }
});
