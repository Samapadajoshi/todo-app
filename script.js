const todoInput = document.getElementById("todo-input");
const todosParent = document.getElementById("todos-wrapper");

const todos = [];


function addTodo() {
    const todoValue = todoInput.value;

    if (!todoValue) {
        // "" --> !false --> true
        alert("Enter valid value");
        return;
    }

    todos.push(todoValue);
    //magic box --> todo -----> frontend 
    displayTodos();

    todoInput.value = "";
}

function displayTodos() {
    //todos --> ??
    todosParent.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        // creating para element
        const todoPara = document.createElement("p");

        todoPara.innerText = todoValue;

        // adding element to front end
        todosParent.appendChild(todoPara);
    }

}