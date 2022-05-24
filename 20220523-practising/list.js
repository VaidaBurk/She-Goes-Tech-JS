let itemsList = [];

function addItem() {
    let input = document.getElementById('input').value;
    itemsList.push(input);
    printList();
    clearForm();
}

let list = document.getElementById('list');

function printList() {
    let generatedHtml = '';
    itemsList.forEach(element => {
        generatedHtml += `<li class="list-group-item">${element}<div class="del-btn btn btn-danger btn-sm position-absolute end-0">DEL</div></li>`
    });
    list.innerHTML = generatedHtml;
    deleteItem();
}

function deleteItem() {
    let allItems = document.querySelectorAll('.del-btn');
    for (let i = 0; i < allItems.length; i++) {
        allItems[i].onclick = function () {
            console.log(itemsList[i]);
            console.log(i);
            this.parentNode.remove();
            itemsList.splice(i);
            console.log(itemsList);
            printList();
        }
    }
}

function clearForm() {
    document.getElementById('input').value = ""; 
}