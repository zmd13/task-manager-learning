# User Guide - Simple Task Manager

Welcome to the Simple Task Manager! This guide will help you get the most out of your task management experience.

## Table of Contents
- [Getting Started](#getting-started)
- [Adding Tasks](#adding-tasks)
- [Managing Tasks](#managing-tasks)
- [Task Statistics](#task-statistics)
- [Clearing Completed Tasks](#clearing-completed-tasks)
- [Data Storage](#data-storage)
- [Tips and Tricks](#tips-and-tricks)

## Getting Started

### Opening the Task Manager
1. Open the `index.html` file in your web browser (Chrome, Firefox, Safari, or Edge)
2. You'll see the task manager interface with:
   - A text input field for adding new tasks
   - An empty task list (if this is your first time)
   - Statistics showing 0 total tasks and 0 completed

### First-Time Setup
No setup required! The task manager works right out of the box. Your tasks will be automatically saved in your browser's local storage.

## Adding Tasks

### Method 1: Using the Add Button
1. Type your task in the text input field (e.g., "Buy groceries")
2. Click the **"Add Task"** button
3. Your task will appear in the list below

**Example:**
```
Input: "Buy groceries"
Result: A new task appears in the list with a checkbox and delete button
```

### Method 2: Using the Enter Key
1. Type your task in the text input field
2. Press the **Enter** key on your keyboard
3. Your task will be added instantly

**Tips:**
- Tasks can be any length, but shorter tasks are easier to read
- You cannot add empty tasks - you must type something first
- Each task is automatically assigned a unique ID

## Managing Tasks

### Marking Tasks as Complete
1. Find the task you want to mark as complete
2. Click the **checkbox** next to the task
3. The task text will become:
   - Crossed out (strikethrough)
   - Slightly faded
   - Still visible in the list

**Example:**
```
Before: ☐ Buy groceries
After:  ☑ Buy groceries (crossed out and faded)
```

### Unmarking Completed Tasks
1. Find a completed task (one with a checked checkbox)
2. Click the **checkbox** again to uncheck it
3. The task returns to its normal appearance

### Deleting Individual Tasks
1. Find the task you want to delete
2. Click the red **"Delete"** button next to the task
3. The task is immediately removed from the list

**Warning:** Deleting a task is permanent and cannot be undone!

## Task Statistics

The statistics section shows you at a glance:

- **Total Tasks:** The total number of tasks in your list (both completed and incomplete)
- **Completed:** The number of tasks you've marked as complete

**Example:**
```
Total Tasks: 5
Completed: 2
```

This means you have 5 tasks total, 2 are done, and 3 are still pending.

## Clearing Completed Tasks

When you have many completed tasks cluttering your list, you can clear them all at once:

1. Click the **"Clear All Completed Tasks"** button at the bottom
2. If you have no completed tasks, you'll see a message: "No completed tasks to clear!"
3. If you have completed tasks, a confirmation dialog will ask:
   ```
   "Are you sure you want to delete X completed task(s)?"
   ```
4. Click **OK** to delete all completed tasks, or **Cancel** to keep them

**Example Scenario:**
```
Before clearing:
- ☑ Buy groceries (completed)
- ☐ Write report (incomplete)
- ☑ Call dentist (completed)
- ☐ Exercise (incomplete)

After clearing:
- ☐ Write report (incomplete)
- ☐ Exercise (incomplete)
```

## Data Storage

### How Your Tasks Are Saved
- Tasks are automatically saved to your browser's **localStorage**
- Every time you add, complete, or delete a task, the changes are saved instantly
- Your tasks persist even if you:
  - Close the browser
  - Refresh the page
  - Turn off your computer

### Important Notes About Storage
- **Browser-specific:** Tasks saved in Chrome won't appear in Firefox (and vice versa)
- **Device-specific:** Tasks saved on your laptop won't appear on your phone
- **Private browsing:** Tasks won't be saved if you're in incognito/private mode
- **Clearing browser data:** If you clear your browser's cache/data, your tasks will be lost

### Accessing Tasks from Multiple Devices
This task manager stores data locally in your browser. To access tasks across devices, you would need to:
- Use the same browser on each device
- Manually export/import your tasks (feature not currently available)
- Or consider using a cloud-based task manager

## Tips and Tricks

### Best Practices
1. **Keep tasks specific:** Instead of "Work on project," try "Complete project proposal outline"
2. **Regular cleanup:** Clear completed tasks weekly to keep your list manageable
3. **Daily review:** Check your task list at the start and end of each day
4. **Priority tasks:** Add important tasks first so they appear at the top of your list

### Keyboard Shortcuts
- **Enter key:** Quickly add a task without clicking the button
- **Tab key:** Move between the input field and buttons

### Organizing Your Tasks
Since tasks appear in the order you add them:
- Add urgent tasks first to keep them at the top
- Use prefixes like "🔴 Urgent:" or "📅 Today:" for quick visual sorting
- Consider using emoji indicators: ⭐ for important, 📧 for emails, 📞 for calls

### Example Task List
```
☐ ⭐ Finish quarterly report (deadline today)
☐ 📧 Reply to client email
☐ 📞 Call team meeting at 2pm
☐ Buy groceries
☐ Schedule dentist appointment
☑ Morning workout (completed)
☑ Review budget spreadsheet (completed)
```

## Troubleshooting

### My tasks disappeared!
**Possible causes:**
- You cleared your browser data/cache
- You're using a different browser or device
- You're in private/incognito mode

**Solution:** Unfortunately, if tasks were deleted from localStorage, they cannot be recovered.

### The "Add Task" button doesn't work
**Check:**
1. Did you type something in the input field?
2. Try pressing Enter instead
3. Refresh the page and try again

### Tasks aren't saving
**Check:**
1. Are you in private/incognito mode?
2. Does your browser allow localStorage?
3. Do you have enough storage space in your browser?

### Page looks broken or strange
**Solutions:**
1. Refresh the page (F5 or Ctrl+R)
2. Clear your browser cache
3. Make sure all three files (index.html, script.js, styles.css) are in the same folder

## Frequently Asked Questions

**Q: Can I edit a task after creating it?**
A: Currently, no. You'll need to delete the task and create a new one with the corrected text.

**Q: Is there a limit to how many tasks I can create?**
A: The limit depends on your browser's localStorage capacity (usually 5-10MB), which can hold thousands of tasks.

**Q: Can I share my task list with others?**
A: Not directly. The tasks are stored locally on your device.

**Q: Can I print my task list?**
A: Yes! Use your browser's print function (Ctrl+P or Cmd+P) to print the current view.

**Q: Does this work offline?**
A: Yes! Once you've loaded the page, it works completely offline.

## Need Help?

If you encounter any issues or have questions not covered in this guide, please:
1. Check the [API Reference](API_REFERENCE.md) for technical details
2. Review the [Contributing Guidelines](CONTRIBUTING.md) if you want to suggest improvements
3. Open an issue on the project's GitHub repository

---

**Enjoy managing your tasks! 📝✅**
