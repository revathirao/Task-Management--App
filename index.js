//createe vatiables to theinput field

let task_myArray = [];
const input_taskName = document.getElementById("task-name");
const input_category = document.getElementById("category");
const input_deadline = document.getElementById("deadline");
const input_status = document.getElementById("status");
const button_addTask = document.getElementById("add-task-btn");
const button_removeTask = document.getElementById("remove-task-btn");
const button_updateTask = document.getElementById("update-task-btn");
const taskList = document.getElementById("task-list")
const filter_status = document.getElementById("filter-status")


//add Task
button_addTask.addEventListener("click", function () {

    if (
        input_taskName.value.trim() === "" ||
        input_category.value.trim() === "" ||
        input_deadline.value === ""
    ) {
        alert("Please fill in all fields before adding a task.");
        return;
    }
    // create task object
    const task = {
        taskName: input_taskName.value.trim(),
        category: input_category.value.trim(),
        deadline: input_deadline.value,
        status: input_status.value
    }

    //add task to array-task-list
    task_myArray.push(task);

    //clear inputs after adding the inputs
    input_taskName.value = "";
    input_category.value = "";
    input_deadline.value = "";
    input_status.value = "";

    //diplays task aafter adding it

    displayTask();

});


//dis[laying the task list
function displayTask(array = task_myArray) {
    taskList.innerHTML = "";

    if (array.length === 0) {
        taskList.innerHTML = "<li>No tasks available</li>";
    } else {
        for (let i = 0; i < array.length; i++) {
            let taskItem = document.createElement("li");
            taskItem.innerText =
                `${array[i].taskName} | ${array[i].category} | ${array[i].deadline} | ${array[i].status}`
            taskList.appendChild(taskItem)
        }
    }
}

button_removeTask.addEventListener("click", function () {

    if (task_myArray.length === 0) {
        alert("There is no item to  remove from the cart")
    } else {
        task_myArray.pop();
        displayTask();
    }

});

button_updateTask.addEventListener("click", function () {
    let taskNameToBeUpdated = prompt("Enter the task name")

    //go through each item in the list until u find the match
    for (let i = 0; i < task_myArray.length; i++) {

        if (task_myArray[i].taskName === taskNameToBeUpdated) {

            //get the status from user
            let newStatus = prompt("Enter the status like complete or inprogress  or overdue")

            newStatus = newStatus.toLowerCase();

            //validate
            if (newStatus === "inprogress" || newStatus === "completed" || newStatus === "overdue") {
                task_myArray[i].status = newStatus;
                displayTask();

                alert("Status Updated to: " + newStatus);
            } else {
                alert("Invalid status! Please enter: Overdue, Inprogress, or Completed.");
            }
            return
        }
    }
    // If no task was found
    alert("Task not found!");

});



filter_status.addEventListener("change", function () {
    let taskSelected = filter_status.value.toLowerCase();
    let filteredTask = [];

    // If user chooses "all", just display everything
    if (taskSelected === "all") {
        displayTask(task_myArray);
        return;
    }

    // Loop through all tasks and add matching ones to filteredTask
    for (let i = 0; i < task_myArray.length; i++) {
        if (task_myArray[i].status.toLowerCase() === taskSelected) {
            filteredTask.push(task_myArray[i]);
        }
    }

    // Display only matching tasks
    if (filteredTask.length === 0) {
        taskList.innerHTML = "<li>No task found</li>";
    } else {
        displayTask(filteredTask);
    }
});


filter_category.addEventListener("change", function () {
    const selectedCat = filter_category.value.toLowerCase();
    if (selectedCat === "all") {
        displayTask(task_myArray);
        return;
    }
    const filtered = task_myArray.filter(
        t => t.category.toLowerCase() === selectedCat
    );
    displayTask(filtered);
});
