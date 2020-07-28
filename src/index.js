const DOM = require('./DOM.js');
document.getElementById("plus").onclick = on;
document.getElementById("submit_button").onclick = off;



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
    let overlay = document.getElementById("overlay");
    let todoList = document.getElementById("addTodo");
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";



}
  
function off(){
    document.getElementById("overlay").style.display = "none";
    let pname = document.getElementById("pname").value;
    let pdesc= document.getElementById("pdesc").value;
    let pstart = document.getElementById("pstart").value;
    let pend = document.getElementById("pend").value;
    let ppriority = document.getElementById("lowPriority").value;
    
    if(document.getElementById("lowPriority").checked) {ppriority = document.getElementById("lowPriority").value;}
    else if(document.getElementById("mediumPriority").checked) {ppriority = document.getElementById("mediumPriority").value;}
    else if(document.getElementById("highPriority").checked) {ppriority = document.getElementById("highPriority").value;}
    createTodo(pname, pstart, pend, ppriority, pdesc);
    

}