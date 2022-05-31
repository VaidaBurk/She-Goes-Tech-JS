const people = [
    { name: 'adri'},
    { name: 'becky'},
    { name: 'chris'},
    { name: 'dillon'},
    { name: 'evan'},
    { name: 'frank'},
    { name: 'georgette'},
    { name: 'hugh'},
    { name: 'igor'},
    { name: 'jacoby'},
    { name: 'kristina'},
    { name: 'lemony'},
    { name: 'matilda'},
    { name: 'nile'},
    { name: 'ophelia'},
    { name: 'patrick'},
    { name: 'quincy'},
    { name: 'roslyn'},
    { name: 'solene'},
    { name: 'timothy'},
    { name: 'uff'},
    { name: 'violet'},
    { name: 'wyatt'},
    { name: 'x'},
    { name: 'yadri'},
    { name: 'zack'},
];

let searchInputEl = document.getElementById("search");
let listItems = document.getElementById('list-items');
let clearButton = document.getElementById('clear-btn');

clearButton.addEventListener('click', () => {
    searchInputEl.value = "";
    clearFoundItemsList();
})

searchInputEl.addEventListener('input', text => {
    let valueInput = text.target.value;
    people.filter(person => person.name.includes(valueInput.toLowerCase()));

    try {
        if(valueInput && valueInput.length > 0) {
            displayItems(people.filter(person => person.name.includes(valueInput.toLowerCase()))
            // all this thing "people.filter(person => person.name.includes(valueInput.toLowerCase())" is passed to function
            );
        }
    } catch (error) {
        console.error(error);
    }
});

function displayItems(itemsFind) {
    clearFoundItemsList();
    for (const item of itemsFind) {
        let itemElement = document.createElement('li');

        let text = document.createTextNode(item.name);
        itemElement.appendChild(text);
        listItems.appendChild(itemElement);
    }
}

function clearFoundItemsList() {
    while(listItems.firstChild) {
        listItems.removeChild(listItems.firstChild)
    }
}