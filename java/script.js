// script.js
// Python-style approach to DOM manipulation

// Helper function similar to Python's print()
const log = (message) => console.log(`[DEBUG] ${message}`);

// DOM elements cache
const elements = {
    target: document.getElementById('target-element'),
    list: document.getElementById('element-list'),
    addBtn: document.getElementById('add-element'),
    removeBtn: document.getElementById('remove-element')
};

// Text modification like Python string formatting
function modifyText() {
    const pythonVersions = ['3.11', '3.12', '3.13'];
    elements.target.textContent = `Python versions: ${pythonVersions.join(' → ')} 🐍`;
    elements.target.style.color = 'var(--python-blue)';
}

// Style modification handler
function changeStyle() {
    elements.target.style.backgroundColor = 'var(--python-yellow)';
    elements.target.style.padding = '1rem';
    elements.target.textContent = 'Styled like Python REPL! >>>';
}

// List manipulation (similar to Python list methods)
let counter = 1;

function handleListOperations(action) {
    if (action === 'add') {
        const newItem = document.createElement('li');
        newItem.textContent = `List item #${counter++} (Like Python list.append())`;
        elements.list.appendChild(newItem);
    } else if (action === 'remove' && elements.list.children.length > 0) {
        elements.list.lastElementChild.remove();
    }
}

// Event listeners with Python-like naming
function initializeEventHandlers() {
    document.querySelector('[data-action="modify"]').addEventListener('click', modifyText);
    document.querySelector('[data-action="style"]').addEventListener('click', changeStyle);
    elements.addBtn.addEventListener('click', () => handleListOperations('add'));
    elements.removeBtn.addEventListener('click', () => handleListOperations('remove'));
    
    log('Event handlers initialized');
}

// Main initialization (like Python's if __name__ == '__main__')
document.addEventListener('DOMContentLoaded', () => {
    initializeEventHandlers();
    log('DOM fully loaded and parsed');
});
