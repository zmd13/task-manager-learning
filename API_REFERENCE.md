# API Reference

Complete technical documentation for the Simple Task Manager JavaScript functions and data structures.

## Table of Contents
- [Overview](#overview)
- [Data Structures](#data-structures)
- [Global Variables](#global-variables)
- [Core Functions](#core-functions)
- [Helper Functions](#helper-functions)
- [Event Handlers](#event-handlers)
- [localStorage Integration](#localstorage-integration)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)

## Overview

The Simple Task Manager is built using vanilla JavaScript with no external dependencies. All functionality is contained in `script.js` and operates on a simple task array stored in browser localStorage.

### Architecture
```
User Action → Event Handler → Core Function → Update Data → Save to localStorage → Render UI
```

## Data Structures

### Task Object

Each task is represented as a JavaScript object with the following structure:

```javascript
{
    id: number,        // Unique identifier (timestamp)
    text: string,      // Task description
    completed: boolean // Completion status
}
```

**Example:**
```javascript
{
    id: 1698765432100,
    text: "Buy groceries",
    completed: false
}
```

**Properties:**

| Property | Type | Description |
|----------|------|-------------|
| `id` | `number` | Unique identifier generated using `Date.now()`. Used to identify and manipulate specific tasks. |
| `text` | `string` | The task description entered by the user. Can contain any characters (HTML is escaped for security). |
| `completed` | `boolean` | Indicates whether the task has been marked as complete. `true` = completed, `false` = incomplete. |

## Global Variables

### `tasks`

```javascript
let tasks = [];
```

**Type:** `Array<Task>`

**Description:** Global array that stores all task objects. This is the single source of truth for the application state.

**Usage:**
```javascript
// Access all tasks
console.log(tasks);

// Get number of tasks
console.log(tasks.length);

// Find a specific task
const task = tasks.find(t => t.id === 1698765432100);
```

## Core Functions

### `addTask()`

Adds a new task to the task list.

**Signature:**
```javascript
function addTask()
```

**Parameters:** None (reads from DOM input)

**Returns:** `void`

**Description:**
Creates a new task object from the input field value, adds it to the tasks array, clears the input, saves to localStorage, and re-renders the UI.

**Example:**
```javascript
// Called when user clicks "Add Task" button or presses Enter
addTask();
```

**Implementation Details:**
1. Retrieves input value from `#taskInput`
2. Trims whitespace and validates (must not be empty)
3. Creates task object with unique ID (using `Date.now()`)
4. Pushes task to `tasks` array
5. Clears input field
6. Calls `saveTasks()` to persist
7. Calls `renderTasks()` to update UI

**Error Handling:**
- Shows alert if input is empty
- Returns early without adding task

**Code Location:** `script.js:13-39`

---

### `deleteTask(id)`

Removes a task from the task list by its ID.

**Signature:**
```javascript
function deleteTask(id)
```

**Parameters:**
- `id` (`number`) - The unique identifier of the task to delete

**Returns:** `void`

**Description:**
Filters out the task with the specified ID from the tasks array, saves the updated array, and re-renders the UI.

**Example:**
```javascript
// Delete task with ID 1698765432100
deleteTask(1698765432100);
```

**Implementation Details:**
1. Uses `Array.filter()` to create new array without the specified task
2. Updates `tasks` array with filtered result
3. Calls `saveTasks()` to persist changes
4. Calls `renderTasks()` to update UI

**Edge Cases:**
- If ID doesn't exist, no error is thrown (filter simply returns all tasks)

**Code Location:** `script.js:44-51`

---

### `toggleComplete(id)`

Toggles the completion status of a task.

**Signature:**
```javascript
function toggleComplete(id)
```

**Parameters:**
- `id` (`number`) - The unique identifier of the task to toggle

**Returns:** `void`

**Description:**
Finds the task with the specified ID and flips its `completed` property between `true` and `false`.

**Example:**
```javascript
// Toggle completion status of task
toggleComplete(1698765432100);

// If task was incomplete, it becomes complete
// If task was complete, it becomes incomplete
```

**Implementation Details:**
1. Uses `Array.find()` to locate task by ID
2. Checks if task exists
3. Toggles the `completed` boolean property
4. Calls `saveTasks()` to persist changes
5. Calls `renderTasks()` to update UI

**Edge Cases:**
- If task with given ID doesn't exist, no action is taken

**Code Location:** `script.js:56-66`

---

### `clearCompleted()`

Removes all completed tasks from the list.

**Signature:**
```javascript
function clearCompleted()
```

**Parameters:** None

**Returns:** `void`

**Description:**
Filters out all tasks with `completed: true`, shows confirmation dialog, and updates the list if user confirms.

**Example:**
```javascript
// Called when user clicks "Clear All Completed Tasks" button
clearCompleted();
```

**Implementation Details:**
1. Counts completed tasks using `Array.filter()`
2. Shows alert if no completed tasks exist
3. Shows confirmation dialog with count
4. If confirmed, filters out completed tasks
5. Calls `saveTasks()` and `renderTasks()`

**User Interaction:**
- Alert shown if no completed tasks
- Confirmation required before deletion
- User can cancel the operation

**Code Location:** `script.js:131-149`

---

## Helper Functions

### `renderTasks()`

Renders all tasks to the DOM.

**Signature:**
```javascript
function renderTasks()
```

**Parameters:** None

**Returns:** `void`

**Description:**
Clears the current task list in the DOM and re-renders all tasks from the `tasks` array. Also updates statistics.

**Example:**
```javascript
// Re-render all tasks (called after any modification)
renderTasks();
```

**Implementation Details:**
1. Gets reference to `#taskList` element
2. Clears innerHTML to remove existing tasks
3. Iterates through `tasks` array with `forEach()`
4. Creates `<li>` element for each task
5. Adds appropriate CSS class based on completion status
6. Generates HTML with checkbox, text, and delete button
7. Uses `escapeHtml()` to prevent XSS attacks
8. Appends each task to the list
9. Calls `updateStats()` to refresh statistics

**HTML Structure Generated:**
```html
<li class="task-item">
    <input type="checkbox" class="task-checkbox" onchange="toggleComplete(id)">
    <span class="task-text">Task description</span>
    <button class="delete-btn" onclick="deleteTask(id)">Delete</button>
</li>
```

**Code Location:** `script.js:71-98`

---

### `updateStats()`

Updates the task statistics display.

**Signature:**
```javascript
function updateStats()
```

**Parameters:** None

**Returns:** `void`

**Description:**
Calculates and displays the total number of tasks and the number of completed tasks.

**Example:**
```javascript
// Update statistics (usually called by renderTasks)
updateStats();
```

**Implementation Details:**
1. Calculates total tasks: `tasks.length`
2. Calculates completed tasks: `tasks.filter(task => task.completed).length`
3. Updates `#totalTasks` text content
4. Updates `#completedTasks` text content

**Display Format:**
```
Total Tasks: 5
Completed: 2
```

**Code Location:** `script.js:103-109`

---

### `escapeHtml(text)`

Escapes HTML characters to prevent XSS attacks.

**Signature:**
```javascript
function escapeHtml(text)
```

**Parameters:**
- `text` (`string`) - The text to escape

**Returns:** `string` - HTML-safe string

**Description:**
Converts potentially dangerous HTML characters into their safe entity equivalents.

**Example:**
```javascript
const userInput = '<script>alert("XSS")</script>';
const safe = escapeHtml(userInput);
console.log(safe); // "&lt;script&gt;alert("XSS")&lt;/script&gt;"
```

**Implementation Details:**
1. Creates a temporary `<div>` element
2. Sets its `textContent` (which auto-escapes HTML)
3. Returns the `innerHTML` (escaped version)

**Security:**
This prevents Cross-Site Scripting (XSS) attacks by ensuring user input is treated as plain text, not executable HTML.

**Characters Escaped:**
- `<` → `&lt;`
- `>` → `&gt;`
- `&` → `&amp;`
- `"` → `&quot;`
- `'` → `&#039;`

**Code Location:** `script.js:154-158`

---

## localStorage Integration

### `saveTasks()`

Saves the tasks array to browser localStorage.

**Signature:**
```javascript
function saveTasks()
```

**Parameters:** None

**Returns:** `void`

**Description:**
Serializes the `tasks` array to JSON and stores it in localStorage under the key `'tasks'`.

**Example:**
```javascript
// Save current tasks to localStorage
saveTasks();
```

**Implementation Details:**
1. Converts `tasks` array to JSON string using `JSON.stringify()`
2. Stores in localStorage with key `'tasks'`

**Storage Format:**
```javascript
// localStorage['tasks'] contains:
'[{"id":1698765432100,"text":"Buy groceries","completed":false}]'
```

**Code Location:** `script.js:114-116`

---

### `loadTasks()`

Loads tasks from browser localStorage.

**Signature:**
```javascript
function loadTasks()
```

**Parameters:** None

**Returns:** `void`

**Description:**
Retrieves the tasks JSON string from localStorage and parses it back into the `tasks` array.

**Example:**
```javascript
// Load tasks from localStorage (called on page load)
loadTasks();
```

**Implementation Details:**
1. Retrieves stored JSON string from localStorage
2. Checks if data exists
3. Parses JSON back to array using `JSON.parse()`
4. Updates global `tasks` variable

**Error Handling:**
- If no stored data exists, `tasks` remains as empty array
- Invalid JSON would throw error (not currently caught)

**Code Location:** `script.js:121-126`

---

## Event Handlers

### Window Load Event

```javascript
window.addEventListener('load', () => {
    loadTasks();
    renderTasks();
});
```

**Description:**
Fires when the page finishes loading. Loads saved tasks from localStorage and renders them to the DOM.

**Execution Order:**
1. Page loads
2. `loadTasks()` retrieves saved tasks
3. `renderTasks()` displays tasks in UI

**Code Location:** `script.js:5-8`

---

### Enter Key Press

Defined inline in HTML:

```html
<input
    type="text"
    id="taskInput"
    onkeypress="if(event.key === 'Enter') addTask()"
>
```

**Description:**
Allows users to add tasks by pressing Enter instead of clicking the button.

**Code Location:** `index.html:19`

---

## Usage Examples

### Complete Task Management Flow

```javascript
// 1. User loads page
// Automatic: window.load → loadTasks() → renderTasks()

// 2. User types "Buy milk" and presses Enter
// Automatic: addTask() is called
// - Creates: { id: 1698765432100, text: "Buy milk", completed: false }
// - Adds to tasks array
// - Calls saveTasks() → saves to localStorage
// - Calls renderTasks() → updates UI

// 3. User checks the checkbox
// Automatic: toggleComplete(1698765432100) is called
// - Finds task by ID
// - Sets completed: true
// - Calls saveTasks() and renderTasks()

// 4. User clicks delete button
// Automatic: deleteTask(1698765432100) is called
// - Removes task from array
// - Calls saveTasks() and renderTasks()
```

### Programmatic Task Management

```javascript
// Manually add a task
tasks.push({
    id: Date.now(),
    text: "Custom task",
    completed: false
});
saveTasks();
renderTasks();

// Find incomplete tasks
const incompleteTasks = tasks.filter(task => !task.completed);
console.log(`You have ${incompleteTasks.length} tasks to complete`);

// Mark all tasks as complete
tasks.forEach(task => task.completed = true);
saveTasks();
renderTasks();

// Clear all tasks
tasks = [];
saveTasks();
renderTasks();
```

### Working with localStorage Directly

```javascript
// View stored tasks
const storedTasks = localStorage.getItem('tasks');
console.log(JSON.parse(storedTasks));

// Manually set tasks
localStorage.setItem('tasks', JSON.stringify([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: true }
]));

// Clear all stored data
localStorage.removeItem('tasks');

// Check storage size
const tasksJSON = JSON.stringify(tasks);
const sizeInBytes = new Blob([tasksJSON]).size;
console.log(`Tasks take up ${sizeInBytes} bytes`);
```

## Best Practices

### For Developers

1. **Always call `saveTasks()` after modifying the `tasks` array:**
   ```javascript
   tasks.push(newTask);
   saveTasks(); // Don't forget!
   ```

2. **Always call `renderTasks()` after changing data to update UI:**
   ```javascript
   task.completed = true;
   renderTasks(); // Update the display
   ```

3. **Use `escapeHtml()` when displaying user input:**
   ```javascript
   element.innerHTML = escapeHtml(userInput);
   ```

4. **Generate unique IDs with `Date.now()`:**
   ```javascript
   const newTask = {
       id: Date.now(), // Unique timestamp
       text: "...",
       completed: false
   };
   ```

5. **Validate input before processing:**
   ```javascript
   const input = taskInput.value.trim();
   if (input === '') {
       alert('Please enter a task!');
       return;
   }
   ```

### Common Patterns

#### Adding Features
```javascript
// Example: Add a task priority feature

// 1. Update task structure
const task = {
    id: Date.now(),
    text: "Buy groceries",
    completed: false,
    priority: "high" // New property
};

// 2. Update rendering to display priority
function renderTasks() {
    // ... existing code ...
    li.innerHTML = `
        <span class="priority-${task.priority}">!</span>
        <input type="checkbox" ...>
        <span class="task-text">${escapeHtml(task.text)}</span>
        <button onclick="deleteTask(${task.id})">Delete</button>
    `;
}
```

#### Error Handling
```javascript
function loadTasks() {
    try {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
        }
    } catch (error) {
        console.error('Failed to load tasks:', error);
        tasks = []; // Reset to empty array
    }
}
```

### Performance Considerations

1. **Avoid excessive rendering:**
   ```javascript
   // Bad: Renders multiple times
   addTask();
   renderTasks();
   addTask();
   renderTasks();

   // Good: Batch operations
   tasks.push(task1);
   tasks.push(task2);
   saveTasks();
   renderTasks(); // Single render
   ```

2. **Efficient array operations:**
   ```javascript
   // Using native array methods
   const completed = tasks.filter(t => t.completed); // O(n)
   const task = tasks.find(t => t.id === id); // O(n) but stops early
   ```

3. **localStorage limitations:**
   - Maximum size: ~5-10MB per domain
   - Synchronous operations (blocks main thread)
   - For large datasets, consider IndexedDB

## API Flow Diagrams

### Add Task Flow
```
User Input → addTask()
    ↓
Validate Input
    ↓
Create Task Object
    ↓
tasks.push(task)
    ↓
saveTasks() → localStorage.setItem()
    ↓
renderTasks() → DOM Update
    ↓
updateStats()
```

### Toggle Complete Flow
```
Checkbox Click → toggleComplete(id)
    ↓
tasks.find(task => task.id === id)
    ↓
task.completed = !task.completed
    ↓
saveTasks() → localStorage.setItem()
    ↓
renderTasks() → DOM Update
    ↓
updateStats()
```

### Delete Task Flow
```
Delete Button → deleteTask(id)
    ↓
tasks = tasks.filter(task => task.id !== id)
    ↓
saveTasks() → localStorage.setItem()
    ↓
renderTasks() → DOM Update
    ↓
updateStats()
```

## Extending the API

### Adding New Functions

When adding new functionality, follow this pattern:

```javascript
/**
 * Brief description of what the function does
 * @param {Type} paramName - Parameter description
 * @returns {ReturnType} Return value description
 */
function newFunction(paramName) {
    // 1. Perform operation
    // 2. Modify tasks array if needed
    // 3. Save changes
    saveTasks();
    // 4. Update UI
    renderTasks();
}
```

### Example: Edit Task Function

```javascript
/**
 * Edit an existing task's text
 * @param {number} id - The task ID to edit
 * @param {string} newText - The new task text
 */
function editTask(id, newText) {
    const task = tasks.find(task => task.id === id);

    if (!task) {
        console.error('Task not found');
        return;
    }

    if (newText.trim() === '') {
        alert('Task cannot be empty');
        return;
    }

    task.text = newText.trim();
    saveTasks();
    renderTasks();
}
```

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| localStorage | 4+ | 3.5+ | 4+ | 8+ |
| Array.find() | 45+ | 25+ | 8+ | 12+ |
| Array.filter() | 5+ | 1.5+ | 3+ | 9+ |
| Arrow Functions | 45+ | 22+ | 10+ | 12+ |
| Template Literals | 41+ | 34+ | 9+ | 12+ |

All features used in this project are supported by all modern browsers.

## Related Documentation

- [User Guide](USER_GUIDE.md) - End-user documentation
- [Contributing Guidelines](CONTRIBUTING.md) - Development guidelines
- [README](README.md) - Project overview

---

**Last Updated:** November 2025
