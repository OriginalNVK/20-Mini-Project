const todoList = document.getElementById('todoList');
const newTodo = document.getElementById('newToDoList');
const addBtn = document.getElementById('addTodoBtn');
addBtn.addEventListener('click', () => {
    if (newTodo.value === '') {
        alert("Please enter a valid text in todo-list field!!!");
        return;
    }

    const newTodoItem = document.createElement('li');
    newTodoItem.innerText = newTodo.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener('click', () => {
        newTodoItem.remove();
    })

    newTodoItem.appendChild(deleteBtn);
    todoList.appendChild(newTodoItem);
    newTodo.value = "";
})