// Array to store all tasks
let tasks = [];

// Load tasks from localStorage when page loads
window.addEventListener('load', () => {
    loadTasks();
    renderTasks();
});

/**
 * Add a new task to the list
 */
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // Check if input is not empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create new task object
    const task = {
        id: Date.now(), // Unique ID based on timestamp
        text: taskText,
        completed: false
    };

    // Add task to array
    tasks.push(task);

    // Clear input field
    taskInput.value = '';

    // Save to localStorage and re-render
    saveTasks();
    renderTasks();
}

/**
 * Delete a task by ID
 */
function deleteTask(id) {
    // Filter out the task with matching ID
    tasks = tasks.filter(task => task.id !== id);

    // Save and re-render
    saveTasks();
    renderTasks();
}

/**
 * Toggle task completion status
 */
function toggleComplete(id) {
    // Find the task and toggle its completed status
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
    }

    // Save and re-render
    saveTasks();
    renderTasks();
}

/**
 * Render all tasks to the DOM
 */
function renderTasks() {
    const taskList = document.getElementById('taskList');

    // Clear existing tasks
    taskList.innerHTML = '';

    // Create HTML for each task
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;

        li.innerHTML = `
            <input
                type="checkbox"
                class="task-checkbox"
                ${task.completed ? 'checked' : ''}
                onchange="toggleComplete(${task.id})"
            >
            <span class="task-text">${escapeHtml(task.text)}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;

        taskList.appendChild(li);
    });

    // Update statistics
    updateStats();
}

/**
 * Update task statistics
 */
function updateStats() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    document.getElementById('totalTasks').textContent = totalTasks;
    document.getElementById('completedTasks').textContent = completedTasks;
}

/**
 * Save tasks to localStorage
 */
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
 * Load tasks from localStorage
 */
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

/**
 * Clear all completed tasks
 */
function clearCompleted() {
    // Filter out completed tasks
    const completedCount = tasks.filter(task => task.completed).length;

    // Check if there are any completed tasks
    if (completedCount === 0) {
        alert('No completed tasks to clear!');
        return;
    }

    // Ask for confirmation
    if (confirm(`Are you sure you want to delete ${completedCount} completed task(s)?`)) {
        tasks = tasks.filter(task => !task.completed);

        // Save and re-render
        saveTasks();
        renderTasks();
    }
}

/**
 * Escape HTML to prevent XSS attacks
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
