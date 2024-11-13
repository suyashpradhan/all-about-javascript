const inputEl = document.querySelector('#todo-input');
const buttonEl = document.querySelector('#add-todo')
const todoContainerEl = document.querySelector('#todo-container')
const listEl = document.querySelector('#list')

let todos = [
    {
        id: 1,
        title: 'Todo One',
        completed: false,
    },
    {
        id: 2,
        title: 'Todo Two',
        completed: true,
    }
]

if (todos.length > 0) {
    const title = document.createElement('h2')
    title.textContent = 'Your Todos'
    todoContainerEl.appendChild(title)

    const removeAllTodosButton = document.createElement('button')
    removeAllTodosButton.textContent = 'Remove all todos'
    removeAllTodosButton.addEventListener('click', removeAllTodos)
    todoContainerEl.appendChild(removeAllTodosButton)
}

// Function to render todos
function renderTodos(todo) {
    const todoItem = document.createElement('li')
    todoItem.addEventListener('click', () => changeStatus(todo.id, todoItem))
    todoItem.textContent = todo.title

    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.addEventListener('click', () => removeTodo(todo.id, todoItem))

    todoItem.appendChild(removeButton)
    listEl.appendChild(todoItem)
}

// Function to add todo
buttonEl.addEventListener('click', (e) => {
    e.preventDefault()
    const userInput = inputEl.value

    const newTodo = {
        id: todos.length + 1,
        title: userInput,
        completed: false,
    }

    todos.push(newTodo)
    renderTodos(newTodo)

    inputEl.value = ''
})

// Function to remove todo
function removeTodo(id, todoItem) {
    todos = todos.filter(t => t.id !== id)
    listEl.removeChild(todoItem)
}

// Function to remove all todos
function removeAllTodos() {
    todos = []
    listEl.innerHTML = ''
}

// Function to update todo
function changeStatus(id, todoItem) {
    todoItem.classList.toggle('complete')
}

// Render all todos
todos.forEach(renderTodos)
