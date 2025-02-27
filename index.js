let items = [];
const input = document.getElementById("itemInput");

const itemDiv = document.getElementById("items")

function renderItems(){
    itemDiv.innerHTML = null;
    for (const [idx, item] of Object.entries(items)){
        const container = document.createElement("div");
        container.style.marginBottom = "10px";

    const text = document.createElement("p");
    text.textContent = item;
    text.style.display = "inline";
    text.style.marginRight = "10px";

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = () => removeItem(idx);

    container.appendChild(text);
    container.appendChild(button);

    itemDiv.appendChild(container);
    }
}


function loadItems(){}

function saveItems(){}

function addItems(){
    const value = input.value;
    if(!value){
        alert("You cannot add an empty item");
        return
    }
    items.push(value);
    renderItems();
    input.value = "";
}

function removeItem(idx){
    items.splice(idx, 1);
    renderItems();
}