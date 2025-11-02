# Contributing to Simple Task Manager

Thank you for your interest in contributing to the Simple Task Manager project! We welcome contributions from developers of all skill levels. This guide will help you get started.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Submitting Changes](#submitting-changes)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Questions and Support](#questions-and-support)

## Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inspiring community for all. Please be respectful and considerate in all interactions.

### Our Standards
- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites
Before you begin, ensure you have:
- A GitHub account
- Git installed on your computer
- A text editor or IDE (VS Code, Sublime Text, Atom, etc.)
- A modern web browser with developer tools
- Basic knowledge of HTML, CSS, and JavaScript

### First Contribution
New to open source? Here's how to make your first contribution:

1. **Find an issue to work on:**
   - Look for issues labeled `good first issue` or `beginner-friendly`
   - Read through the issue description and comments
   - Ask questions if anything is unclear

2. **Comment on the issue:**
   - Let others know you're working on it
   - Ask for clarification if needed
   - Wait for maintainer confirmation before starting

3. **Follow the contribution workflow:**
   - Fork the repository
   - Create a branch
   - Make your changes
   - Submit a pull request

## Development Setup

### 1. Fork and Clone the Repository

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/task-manager-learning.git
cd task-manager-learning
```

### 2. Create a Branch

```bash
# Create a new branch for your feature or bug fix
git checkout -b feature/your-feature-name

# Or for bug fixes:
git checkout -b fix/bug-description
```

**Branch naming conventions:**
- `feature/` - New features or enhancements
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `style/` - CSS/styling changes

### 3. Set Up Your Development Environment

Since this is a vanilla JavaScript project, setup is minimal:

```bash
# No build tools or package managers required!
# Simply open index.html in your browser
```

**Optional: Use a local development server:**

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using VS Code Live Server extension
# Install the extension and click "Go Live"
```

### 4. Make Your Changes

- Edit files using your preferred text editor
- Test changes by opening `index.html` in your browser
- Use browser DevTools to debug (F12 or Right-click → Inspect)

## How to Contribute

### Types of Contributions

#### 🐛 Bug Fixes
Found a bug? Great! Here's how to fix it:
1. Check if an issue already exists for this bug
2. If not, create a new issue describing the bug
3. Fork and create a branch: `fix/bug-name`
4. Fix the bug and add comments explaining your solution
5. Test thoroughly to ensure the bug is fixed
6. Submit a pull request

#### ✨ New Features
Want to add a feature? Follow these steps:
1. Open an issue first to discuss the feature
2. Wait for maintainer feedback and approval
3. Fork and create a branch: `feature/feature-name`
4. Implement the feature
5. Update documentation if needed
6. Submit a pull request

#### 📚 Documentation
Improving documentation is always appreciated:
- Fix typos or unclear explanations
- Add examples or clarifications
- Create tutorials or guides
- Update outdated information

#### 🎨 Design Improvements
Enhance the user interface:
- Improve styling or layout
- Add animations or transitions
- Enhance mobile responsiveness
- Improve accessibility

## Coding Standards

### JavaScript Style Guide

#### General Guidelines
- Use ES6+ syntax (const, let, arrow functions, template literals)
- Write clear, descriptive variable and function names
- Add comments for complex logic
- Keep functions small and focused on a single task
- Avoid global variables when possible

#### Code Examples

**Good:**
```javascript
// Clear, descriptive function name with JSDoc comment
/**
 * Toggles the completion status of a task
 * @param {number} id - The unique identifier of the task
 */
function toggleComplete(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
    }
    saveTasks();
    renderTasks();
}
```

**Avoid:**
```javascript
// Unclear name, no comments
function toggle(i) {
    var t = tasks[i];
    t.c = !t.c;
    save();
    render();
}
```

#### Naming Conventions
- **Functions:** camelCase (`addTask`, `deleteTask`, `renderTasks`)
- **Variables:** camelCase (`taskInput`, `completedTasks`, `taskList`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_TASKS`, `DEFAULT_COLOR`)
- **Classes:** PascalCase (if you add classes in the future)

#### Comments
- Use JSDoc for function documentation
- Add inline comments for complex logic
- Explain *why*, not just *what*

```javascript
/**
 * Escape HTML to prevent XSS attacks
 * @param {string} text - The text to escape
 * @returns {string} The escaped HTML string
 */
function escapeHtml(text) {
    // Create a temporary div to leverage browser's built-in HTML escaping
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
```

### HTML Style Guide

- Use semantic HTML5 elements (`<main>`, `<section>`, `<article>`)
- Add proper ARIA labels for accessibility
- Use descriptive IDs and class names
- Keep structure clean and indented
- Separate concerns (HTML for structure, CSS for style, JS for behavior)

**Example:**
```html
<!-- Good: Semantic and accessible -->
<button onclick="addTask()" aria-label="Add new task">
    Add Task
</button>

<!-- Avoid: Non-semantic -->
<div onclick="addTask()">Add Task</div>
```

### CSS Style Guide

- Use meaningful class names that describe purpose, not appearance
- Group related styles together
- Add comments for major sections
- Use CSS custom properties for repeated values
- Follow mobile-first responsive design

**Example:**
```css
/* Task Item Styles */
.task-item {
    background: #f8f9fa;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    transition: all 0.3s;
}

.task-item:hover {
    background: #e9ecef;
    transform: translateX(5px);
}

/* Completed task state */
.task-item.completed {
    opacity: 0.6;
}
```

## Testing Guidelines

### Manual Testing Checklist

Before submitting a pull request, test the following:

#### Basic Functionality
- [ ] Can add a task with the "Add Task" button
- [ ] Can add a task by pressing Enter
- [ ] Cannot add an empty task
- [ ] Can mark a task as complete
- [ ] Can unmark a completed task
- [ ] Can delete a task
- [ ] Can clear all completed tasks
- [ ] Statistics update correctly

#### Data Persistence
- [ ] Tasks save to localStorage
- [ ] Tasks load when page refreshes
- [ ] Changes persist after browser restart

#### User Interface
- [ ] All buttons are clickable and work
- [ ] Hover effects work properly
- [ ] Animations run smoothly
- [ ] No layout issues or overlapping elements

#### Browser Compatibility
Test in at least two modern browsers:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if on macOS)

#### Responsive Design
- [ ] Works on desktop (1920x1080)
- [ ] Works on tablet (768x1024)
- [ ] Works on mobile (375x667)

#### Edge Cases
- [ ] Very long task names display properly
- [ ] Many tasks (50+) don't break the layout
- [ ] Special characters in task names work
- [ ] Rapid clicking doesn't cause issues

### Testing in Browser DevTools

Use your browser's developer tools:

```javascript
// Open Console (F12) and test functions directly
addTask(); // Should show alert if input is empty
tasks; // View current tasks array
localStorage.getItem('tasks'); // View stored data
```

### Debugging Tips

1. **Console Logging:**
   ```javascript
   console.log('Current tasks:', tasks);
   console.log('Adding task:', taskText);
   ```

2. **Breakpoints:**
   - Open DevTools → Sources tab
   - Click line numbers in script.js to set breakpoints
   - Refresh page and step through code

3. **localStorage Inspection:**
   - DevTools → Application tab → Local Storage
   - View, edit, or clear stored data

## Submitting Changes

### Before You Submit

1. **Test thoroughly** - Follow the testing checklist above
2. **Review your code** - Read through all changes
3. **Check formatting** - Ensure consistent indentation and style
4. **Update documentation** - If you added features or changed behavior
5. **Write good commit messages** - Clear and descriptive

### Commit Message Guidelines

Follow this format:
```
<type>: <short description>

<longer description if needed>
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - CSS/formatting changes
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**
```bash
# Good commit messages
git commit -m "feat: Add task editing functionality"
git commit -m "fix: Prevent duplicate task IDs when clicking rapidly"
git commit -m "docs: Update USER_GUIDE.md with editing instructions"
git commit -m "style: Improve button hover animations"

# Avoid vague messages
git commit -m "fixed stuff"
git commit -m "update"
git commit -m "changes"
```

### Creating a Pull Request

1. **Push your changes:**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request on GitHub:**
   - Go to the repository on GitHub
   - Click "Pull Requests" → "New Pull Request"
   - Select your branch
   - Fill out the PR template

3. **PR Title and Description:**
   ```markdown
   ## Description
   Brief summary of what this PR does.

   ## Changes Made
   - Added feature X
   - Fixed bug Y
   - Updated documentation Z

   ## Testing
   - [x] Tested in Chrome
   - [x] Tested on mobile
   - [x] All manual tests pass

   ## Screenshots (if applicable)
   [Add screenshots for UI changes]

   ## Related Issues
   Closes #123
   ```

4. **Respond to feedback:**
   - Maintainers may request changes
   - Make requested updates in your branch
   - Push additional commits to the same branch
   - Be patient and professional

### After Your PR is Merged

1. **Delete your branch:**
   ```bash
   git checkout main
   git pull origin main
   git branch -d feature/your-feature-name
   ```

2. **Celebrate!** 🎉 You've contributed to open source!

## Reporting Bugs

### Before Reporting
1. Search existing issues to avoid duplicates
2. Test in the latest version
3. Try to reproduce the bug consistently

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
- Device: [e.g., Desktop, iPhone 12]

**Additional context**
Any other information about the problem.
```

## Suggesting Features

### Before Suggesting
1. Check if the feature already exists
2. Search existing issues and discussions
3. Consider if it fits the project's scope

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Mockups, examples, or references.
```

## Questions and Support

### Getting Help
- **Documentation:** Check [USER_GUIDE.md](USER_GUIDE.md) and [API_REFERENCE.md](API_REFERENCE.md)
- **Issues:** Search existing issues for similar questions
- **Discussions:** Use GitHub Discussions for general questions
- **Email:** Contact the maintainer for sensitive issues

### Communication Guidelines
- Be respectful and professional
- Provide context and details
- Be patient waiting for responses
- Follow up if you don't hear back in 7 days

## Recognition

All contributors will be acknowledged! Your contributions may appear in:
- Project README contributors list
- Release notes
- Project changelog

## Resources for Beginners

### Learning Resources
- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive web development documentation
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial
- [CSS-Tricks](https://css-tricks.com/) - CSS techniques and tutorials

### Git and GitHub
- [GitHub Guides](https://guides.github.com/) - Official GitHub tutorials
- [Git Handbook](https://guides.github.com/introduction/git-handbook/) - Git basics
- [First Contributions](https://github.com/firstcontributions/first-contributions) - Practice making your first contribution

### Open Source
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Open Source Guides](https://opensource.guide/)

## Thank You!

Thank you for taking the time to contribute to Simple Task Manager. Every contribution, no matter how small, helps make this project better for everyone!

---

**Happy coding! 💻✨**
