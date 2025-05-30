// === Todo CRUD Managment ===

// Array to store todos
let todos = [];

// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

//Function to render todos
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) =>{
        const li = document.createElement('li');
        li.calssName = 'todo-item'
        li.innerHTML = `
        <span>${todo}</span>
        <button onclick="editTodo(${index})">Edit</button>
        <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    })
}

//Functin to add a new todo
function addTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = '';
        renderTodos();
    }
}

//Function to edit a todo 
function editTodo(index) {
    const updateTodo = prompt('Edit your todo', todos[index]);
    if (updateTodo !==null) {
        todos[index] = updateTodo.trim();
        renderTodos();
    }
}

//Function to delete a todo
function deleteTodo (index) {
    if (confirm('Are you sure you want to delete this too?')) {
        todos.slice(index, 1);
        renderTodos();
    }
}

//Event Listeners
todoForm.addEventListener('submit', addTodo);

//Inirial render
renderTodos();