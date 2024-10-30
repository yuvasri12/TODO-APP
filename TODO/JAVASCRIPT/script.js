 // Function to add a new todo
 function addTodo() {
    // Get the input value
    var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value.trim();

    // If the input is not empty, create a new todo item
    if (todoText !== "") {
        // Create a new list item
        var li = document.createElement("li");
        // Set the text content to the input value
        li.textContent = todoText;

        // Create a delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function() {
            li.remove();
        };

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Append the new list item to the todo list
        document.getElementById("todo-list").appendChild(li);

        // Clear the input field
        todoInput.value = "";
    }
}