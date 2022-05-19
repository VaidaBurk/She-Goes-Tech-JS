const paragraph = document.createElement('p');
const h1 = document.createElement('h1');

h1.textContent = "Cool text!";

paragraph.innerHTML = "My text is <em>bold</em>!"

document.body.appendChild(h1);

const itemList = document.querySelector('ul');
const item = document.createElement('li');
const itemWithId = document.getElementById('last');
item.textContent = "text";

itemList.insertBefore(item, itemWithId);

itemList.removeChild(itemList.lastElementChild);
itemList.removeChild(itemWithId);
