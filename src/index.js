const DOM = require('./DOM.js');
import {format} from 'date-fns'

let storage_count = 0;

function setUp(){
    document.getElementById("plus").onclick = on;
    document.getElementById("submit_button").onclick = off;
    document.getElementById("cancelAdd").onclick = cancelAdd;

    if(window.localStorage.getItem('count') != null) storage_count = window.localStorage.getItem('count');
    if(storage_count != 0)
    {
        for(let i  = 1; i <= storage_count; i++)
        {
            let itemname = "Item" + i;
            let todo = JSON.parse(window.localStorage.getItem(itemname));
            createTodo(todo.name, todo.start, todo.end, todo.priority, todo.desc);
        }
    }
    else createTodo('make todo elements', )
}

function addVisibility(overlay)
{
    overlay.removeEventListener('animationend', removeVisibility);
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
}

function removeVisibility(e)
{
    let overlay = e.srcElement;
    overlay.style.display = "none";
    overlay.style.visibility = "hidden";
}


function TodoElement(pname, pstart, pend, ppriority, pdesc)
{
    return {pname, pstart, pend, ppriority, pdesc};
}
function createTodo(pname, pstart, pend, ppriority, pdesc)
{
    let newTodo = TodoElement(pname, pstart, pend, ppriority, pdesc);
    DOM.insertTodo(newTodo);
    
}

function on() {
    let overlay = document.getElementsByClassName("overlay")[0];
    addVisibility(overlay);
    overlay.style.visibility = "visible";
    overlay.style.animation = "fade-in 500ms";
}

function validate(pstart, pend)
{
    let pattern = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;
    if(pstart.match(pattern) == null || pend.match(pattern) == null) return false;
    else return true;

}
  
function off(){
    let overlay = document.getElementsByClassName("overlay")[0];
    let pname = document.getElementById("pname").value;
    let pdesc= document.getElementById("pdesc").value;
    let pstart = document.getElementById("pstart").value;
    let pend = document.getElementById("pend").value;
    let ppriority = document.getElementById("lowPriority").value;
    let todoName = "Item";
    let monthstart = 0, monthend = 0, daystart = 0, dayend = 0, yearstart = 0, yearend = 0;
    if(document.getElementById("errorForm").textContent != "") document.getElementById("errorForm").textContent = "";
    if(validate(pstart, pend))
    {
        monthstart = parseInt(pstart.split(0,2));
        monthend = parseInt(pend.split(0,2));
        daystart = parseInt(pstart.split(3, 5));
        dayend = parseInt(pend.split(3,5));
        yearstart = parseInt(pstart.split(6, 8));
        yearend = parseInt(pstart.split(6, 8));
    }
    else
    {
        DOM.displayFormError("Please enter the start and end date as MM/DD/YYYY");
        return;
    }

    if(document.getElementById("lowPriority").checked) {ppriority = document.getElementById("lowPriority").value;}
    else if(document.getElementById("mediumPriority").checked) {ppriority = document.getElementById("mediumPriority").value;}
    else if(document.getElementById("highPriority").checked) {ppriority = document.getElementById("highPriority").value;}
    createTodo(pname, pstart, pend, ppriority, pdesc);
    overlay.style.animation = "fade-out 500ms";
    overlay.addEventListener('animationend', removeVisibility);

    let todo = {
        name: pname,
        desc: pdesc,
        start: pstart,
        end: pend,
        priority: ppriority
    };

    
    todoName += (++storage_count).toString();
    window.localStorage.setItem(todoName, JSON.stringify(todo));
    window.localStorage.setItem('count', storage_count);

}

function cancelAdd()
{
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.style.animation = "fade-out 500ms";
    overlay.addEventListener('animationend', removeVisibility);
}

setUp();