const todoInput = document.getElementById("todo-input");
const todosParent = document.getElementById("todos-wrapper");

const todos = JSON.parse(localStorage.getItem("todosArr")) || []; // ["do something"]

displayTodos();

function addTodo() {
    const todoValue = todoInput.value;

    if (!todoValue) {
        // "" --> !false --> true
        alert("Enter valid value");
        return;
    }

    todos.push(todoValue);
    localStorage.setItem("todosArr", JSON.stringify(todos));

    // magic box --> todos --> front end
    displayTodos();

    todoInput.value = "";
}

function displayTodos() {
    todosParent.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        // creating para element
        const todoPara = document.createElement("p");

        todoPara.innerText = todos[i];

        // adding element to front end
        todosParent.appendChild(todoPara);
    }
}