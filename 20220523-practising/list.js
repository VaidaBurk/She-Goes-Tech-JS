let itemsList = [];

function addItem() {
    let input = document.getElementById('input').value;
    itemsList.push(input);
    console.log(list);
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
}

function clearForm() {
    document.getElementById('input').value = ""; 
}