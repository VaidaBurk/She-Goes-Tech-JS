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

searchInputEl.addEventListener('input', text => {
    let valueInput = text.target.value;
    console.log(valueInput);

    let valueFind = people.filter(person => person.name.includes(valueInput.toLowerCase()));
    console.log(valueFind);

    try {
        displayItems(valueFind);
    } catch (error) {
        console.error(error);
    }

});

function displayItems(itemsFind) {
    for (const item of itemsFind) {
        let itemElement = document.createElement('li');
        let listItems = document.getElementById('list-items');
        let text = document.createTextNode(item.name);
        itemElement.appendChild(text);
        listItems.appendChild(itemElement);
    }
}