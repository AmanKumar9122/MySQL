// Select elements
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let btn = document.querySelector("button");

// Function to create a new task with a delete button
function createTask(taskText) {
    let item = document.createElement("li");
    item.innerText = taskText;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    // Add event listener to delete the task when the delete button is clicked
    delBtn.addEventListener("click", function () {
        let par = this.parentElement; // Get the parent <li>
        par.remove(); // Remove the entire list item
    });

    item.appendChild(delBtn); // Add the delete button to the list item
    ul.appendChild(item); // Add the new list item to the unordered list
}

// Event listener for the "Add Task" button
btn.addEventListener("click", function () {
    if (inp.value.trim() !== "") { // Ensure input is not empty or just spaces
        createTask(inp.value); // Create a new task
        inp.value = ""; // Clear the input field
    }
});

// Attach event listeners to existing delete buttons on page load
let delBtns = document.querySelectorAll(".delete");
delBtns.forEach(function (delBtn) {
    delBtn.addEventListener("click", function () {
        let par = this.parentElement; // Get the parent <li>
        par.remove(); // Remove the list item
    });
});
