const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = []; //array
const TODOS_KEY = "toDos";

function handleToDoSubmit (event) {
    event.preventDefault();
    const newToDo = toDoInput.value; //store input
    toDoInput.value = ""; //clearing
    const newToDoObj = { //re-labeling
        text: newToDo, //text = key
        id: Date.now(),
    };
    toDos.push(newToDoObj); //put labeled info in toDos
    paintToDo(newToDoObj); //paintToDo(newToDo->"Obj)
    saveToDos();
}

function saveToDos () {
    localStorage.setItem("toDos", JSON.stringify(toDos));
} 
//toDos array -> local string values with "toDos" keys

function paintToDo (newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
        span.innerText = newToDo.text;
        //create
        const button = document.createElement("button");
    button.innerText = ("❌");
    button.id = "button";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function deleteToDo (event) {
    const li = event.target.parentElement;
    li.remove(); //remove from browser
    toDos = toDos.filter(
        (par) => par.id !== parseInt(li.id)
        ); //arrow function
        saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //overwrite toDos with objectified saved values
    parsedToDos.forEach(paintToDo);
}