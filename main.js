// Array of grocery items
let groceryItems = ["Apples", "Milk", "Bread", "Eggs"];

// Function to display grocery items
function displayItems() {
    const groceryList = document.getElementById("itemList");

    // Clear existing list
    groceryList.innerHTML = "";

    // Loop through the grocery items array and create list elements
    groceryItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;

        // Create a span element for delete functionality
        const deleteSpan = document.createElement("span");
        deleteSpan.className = "delete";
        deleteSpan.textContent = "\u00D7"; // Unicode for 'x'
        li.appendChild(deleteSpan);

        // Add event listener to delete span
        deleteSpan.addEventListener("click", function() {
            deleteItem(item);
        });

        groceryList.appendChild(li);
    });

    // Call deleteItem function
    deleteItem();
}

// Function to add item to the grocery list
function updateList() {
    const input = document.getElementById("input");
    const newItem = input.value.trim();

    // Check if input is empty
    if (newItem === "") {
        alert("Please insert an item.");
    } else {
        groceryItems.push(newItem);
        input.value = ""; // Reset input field
        displayItems(); // Call displayItems to update list
    }
}

// Function to delete item from the grocery list
function deleteItem(item) {
    const deleteSpans = document.querySelectorAll(".delete");

    // Add click event listener to delete spans
    deleteSpans.forEach(span => {
        span.addEventListener("click", function() {
            const listItem = this.parentElement;
            const itemIndex = groceryItems.indexOf(listItem.textContent);
            if (itemIndex !== -1) {
                groceryItems.splice(itemIndex, 1);
                displayItems(); // Update list after deletion
            }
        });
    });

    // Add click event listener to list items to toggle checked class
    const itemList = document.getElementById("itemList");
    itemList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    });

    // Add keyup event listener to input field to call addItem on Enter key press
    const inputField = document.getElementById("input");
    inputField.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            updateList();
        }
    });
}

// Call the functions
displayItems();
updateList();