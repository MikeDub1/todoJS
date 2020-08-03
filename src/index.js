const DOM = require('./DOM.js');

function setUp(){
    document.getElementById("plus").onclick = on;
    document.getElementById("submit_button").onclick = off;
    document.getElementById("cancelAdd").onclick = cancelAdd;
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
  
function off(){
    let overlay = document.getElementsByClassName("overlay")[0];
    let pname = document.getElementById("pname").value;
    let pdesc= document.getElementById("pdesc").value;
    let pstart = document.getElementById("pstart").value;
    let pend = document.getElementById("pend").value;
    let ppriority = document.getElementById("lowPriority").value;
    
    if(document.getElementById("lowPriority").checked) {ppriority = document.getElementById("lowPriority").value;}
    else if(document.getElementById("mediumPriority").checked) {ppriority = document.getElementById("mediumPriority").value;}
    else if(document.getElementById("highPriority").checked) {ppriority = document.getElementById("highPriority").value;}
    createTodo(pname, pstart, pend, ppriority, pdesc);
    overlay.style.animation = "fade-out 500ms";
    overlay.addEventListener('animationend', removeVisibility);
    
}

function cancelAdd()
{
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.style.animation = "fade-out 500ms";
    overlay.addEventListener('animationend', removeVisibility);
    
}

setUp();