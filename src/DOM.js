
export function insertTodo(newTodo)
{
    let leftNotebook = document.getElementById("notebook-left");
    let newDiv = document.createElement("div");
    let descriptionDiv = document.createElement("div");
    let p = document.createElement("p");
    let table_div = document.createElement("div");
    let filled = "100%";

    p.textContent = newTodo.pname + "\n";
    p.style.marginBottom = "15px";
    newDiv.appendChild(p);
    
    let table = createTable(newTodo);

    table_div.appendChild(table);
    table_div.style.display = "flex";
    table_div.style.justifyContent = "center";
    table_div.style.alignItems = "center";
    table_div.style.height = "50%";
    table_div.style.width = filled;
    

    p.style.fontSize = "25px";
    newDiv.style.height = "13%";
    newDiv.style.width = filled;
    newDiv.appendChild(table_div);
    newDiv.style.borderBottom = "solid";
    leftNotebook.appendChild(newDiv);
}

function createTable(newTodo)
{
    let table = document.createElement("table");
    let tr1 = document.createElement("tr"), tr2 = document.createElement("tr"), tr3 = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");

    td1.textContent = "Start Date:";
    td2.textContent = newTodo.pstart;
    td3.textContent = "End Date:"
    td4.textContent = newTodo.pend;
    td5.textContent = "Priority:"
    td6.textContent = newTodo.ppriority;

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);
    
    table.append(tr1);
    table.append(tr2);
    table.append(tr3);

    table.style.height = "50%";
    table.style.width = "70%";

    return table;
}

export function addAnimations(elementID, animations)
{
    let element = document.getElementById(elementID);
    if (element == null) element = document.getElementsByClassName(elementID)[0];

    for(let animation_i = 0; animation_i < animations.length; animation_i++)
    {
        let a = animations[animation_i];

        element.classList.add(a);
    }
}

export function displayFormError(message)
{
    let errorForm = document.getElementById("errorForm");
    errorForm.textContent = message;
    errorForm.style.visibility = "visible";
}