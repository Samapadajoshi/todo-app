const todoInput = document.getElementById("todo-input");
const todosParent = document.getElementById("todos-wrapper");

function addTodo() {
    const todoValue = todoInput.value;

    if (!todoValue) {
        // "" --> !false --> true
        alert("Enter valid value");
        return;
    }

    // creating para element
    const todoPara = document.createElement("p");

    todoPara.innerText = todoValue;

    // adding element to front end
    todosParent.appendChild(todoPara);

    todoInput.value = "";
}