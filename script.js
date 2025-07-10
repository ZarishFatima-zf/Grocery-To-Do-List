document.addEventListener('DOMContentLoaded', function() {
  const itemInput = document.getElementById('item-input');
  const addBtn = document.getElementById('add-btn');
  const itemList = document.getElementById('item-list');
  const clearBtn = document.getElementById('clear-btn');

  addBtn.addEventListener('click', addItem);
  itemList.addEventListener('click', deleteOrEditItem);
  clearBtn.addEventListener('click', clearItems);

  function addItem() {
    const itemName = itemInput.value;
    if (itemName !== '') {
      const li = document.createElement('li');
      li.innerHTML = `<span>${itemName}</span>
                      <span class="delete-icon">&#128465;</span>
                      <span class="edit-icon">&#9998;</span>`;
      itemList.appendChild(li);
      itemInput.value = '';
    }
  }

  function deleteOrEditItem(event) {
    const target = event.target;
    if (target.classList.contains('delete-icon')) {
      target.parentElement.remove();
    } else if (target.classList.contains('edit-icon')) {
      const itemText = target.parentElement.firstChild;
      const newItemName = prompt('Edit item:', itemText.textContent);
      if (newItemName !== null && newItemName !== '') 
      {
        itemText.textContent = newItemName;
      }
    }
  }

  function clearItems() {
    itemList.innerHTML = '';
  }
});