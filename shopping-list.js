
const list = [];
const shoppingList = document.getElementById("shoppingList");

function getItem(event) {
    event.preventDefault();
    const item = document.getElementById("item").value;
    if (!item) {
        alert("Please enter an item.");
        return;
    }
    if (list.includes(item)) {
        alert("Item already exists in the list.");
        return;
    }
    list.push(item);
    list.sort();
    document.getElementById("myForm").reset();
    removeList();
    makeList();
}

function makeList() {
    for (const item of list) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.addEventListener("click", removeItem);
        shoppingList.appendChild(listItem);
    }
}

function removeList() {
    while (shoppingList.firstChild) {
        shoppingList.removeChild(shoppingList.firstChild);
    }
}

function removeItem(event) {
    const item = event.currentTarget.textContent;
    const index = list.indexOf(item);
    if (index === -1) {
        alert("Item not found in the list.");
        return;
    }
    list.splice(index, 1);
    removeList();
    makeList();
}

document.getElementById("myForm").addEventListener("submit", getItem);