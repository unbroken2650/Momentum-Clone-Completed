const toDoDiv = document.querySelector("#todo");
const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const btn = document.querySelector("#todoBtn");

let toDos = [];
const TODOS_KEY = 'todos';

function openClose() {
	if (btn.className === "close") {
		todo.classList.toggle("mini");
		todo.classList.toggle("large");
		toDoInput.classList.add("disappear");
		toDoList.classList.add("disappear");
		toDoInput.classList.remove("appear");
		toDoList.classList.remove("appear");
		btn.className = "open";
		btn.innerHTML = "열기";
	}
	else {
		todo.classList.toggle("mini");
		todo.classList.toggle("large");
		toDoInput.classList.add("appear");
		toDoList.classList.add("appear");
		toDoInput.classList.remove("disappear");
		toDoList.classList.remove("disappear");
		btn.className = "close";
		btn.innerHTML = "닫기";
	}
}

btn.addEventListener("click", openClose);

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id, 10));
    saveTodos();
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const btn = document.createElement('button');
    btn.innerText = '삭제';
    btn.addEventListener('click', deleteToDo);

    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function toDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);

    saveTodos();
}

toDoForm.addEventListener('submit', toDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}