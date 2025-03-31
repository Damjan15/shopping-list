const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const itemFilter = document.getElementById("filter");
const clearBtn = document.getElementById("clear");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate input
  if (newItem === "") {
    alert("Please enter an item");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = "";

  checkUI();
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure?")) {
      console.log(e.target.parentElement.parentElement);
      e.target.parentElement.parentElement.remove();
    }
  }

  checkUI();
}

function clearItems() {
  if (confirm("Are you sure?")) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  }

  checkUI();
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
}

function checkUI() {
  const items = itemList.querySelectorAll("li");

  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);

// Runs when the page loads
checkUI();
