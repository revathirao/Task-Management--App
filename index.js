// Each Task stored as an oblect with properties such as task name, category, deadline, and status.
// Add the Task items to Aray

//createe vatiables to theinput field

let task_myArray =[];
let input_taskName = document.getElementById("task-name");
let input_category = document.getElementById("category");
let input_deadline = document.getElementById("deadline");
let input_status = document.getElementById("status");
let button_addTask = document.getElementById("add-task-btn");
let button_removeTask = document.getElementById("remove-task-btn");
let button_updateTask = document.getElementById("update-task-btn");
let taskList = document.getElementById("task-list")


button_addTask.addEventListener("click",function(){

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
input_taskName.value="";
input_category.value ="";
input_deadline.value ="";
input_status.value ="";

//diplays task aafter adding it

displayTask();

}); 

//

// //dis[laying the task list
function displayTask() {
    taskList.innerHTML = "";

    if (task_myArray.length === 0) {
        alert("No task displayed");
    } else {
        for (let i = 0; i < task_myArray.length; i++) {
            let taskItem = document.createElement("li");
            taskItem.innerText = 
                `${task_myArray[i].taskName} | ${task_myArray[i].category} | ${task_myArray[i].deadline} | ${task_myArray[i].status}`
            taskList.appendChild(taskItem)
        }
    }
}

button_removeTask.addEventListener("click", function(){

    if(task_myArray.length===0){
        alert("There is no item to  remove from the cart")
    }else{
        task_myArray.pop();
        displayTask();
    }
    
});

button_updateTask.addEventListener("click",function(){
    let taskNameToBeUpdated  = prompt("Enter the task name")

    //go through each item in the list until u find the match
for(let i =0; i < task_myArray.length; i++){
    
    if(task_myArray[i].taskName ===taskNameToBeUpdated ){
    
     //get the status from user
     let newStatus =  prompt ("Enter the status like complete or inprogress  or overdue")

        //validate
        if(newStatus === "inprogress" || newStatus === "complete" || newStatus === "overdue"){
            task_myArray.status =  newStatus;
            addItemToCart("Status Updated to: " + newStatus);
            displayTask();
        }else{
            alert("Invalid status! Please enter: overdue, inprogress, or complete.");
            }
            return  
        }
    }
     // If no task was found
    alert("Task not found!");
}




});
