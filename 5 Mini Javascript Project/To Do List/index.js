let tasks = [];

const addButton = document.querySelector('.add-button');
const input = document.querySelector('.add-input');
const list = document.querySelector('.list');


const storageKey = "items";

const delButton = document.querySelector('.del');

addButton.addEventListener('click', function() {
    add();
})

function onLoad() {
    list.innerHTML = null;
    for(const [idx, item] of Object.entries(tasks)) {
        const text = document.createElement('p');
        const button = document.createElement('button');

        button.textContent = 'Delete';
        text.textContent = item;
        text.className = 'text';

        button.style.marginLeft = '10px';
        button.className = 'remove';

        button.onclick = () => del(idx);

        text.appendChild(button);
        list.appendChild(text);
    }
}




const add = () => {
    if(!input.value) return;
    const value = input.value;
    tasks.push(value);
    onLoad();
    input.value = '';
    saveItems();

}

function del(idx) {
    tasks.splice(idx, 1);
    onLoad();
    saveItems();
}


function loadTasks() {
   const oldItems = localStorage.getItem(storageKey);
   if(oldItems) tasks = JSON.parse(oldItems)
    onLoad();
}

function saveItems() {
    const stringItems = JSON.stringify(tasks);
    localStorage.setItem(storageKey, stringItems);
}

document.addEventListener("DOMContentLoaded", loadTasks);