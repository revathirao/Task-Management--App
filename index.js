// Each Task stored as an oblect with properties such as task name, category, deadline, and status.
// Add the Task items to Aray

//createe vatiables to theinput field

let input_taskName = document.getElementById("task-name");
let input_category = document.getElementById("category");
let input_deadline = document.getElementById("deadline");
let input_status = document.getElementById("status");
let button_addTask = document.getElementById("ad-task=btn");

let taskList =[];

button_addTask.addEventListener("click",function(){

// create task object
    const task = {
        taskName: input_taskName.value.trim(),
        category: input_category.value.trim(),
        deadline: input_deadline.value, 
        status: input_status.value
        }
}); 

//add task to array-task-list
taskList.push[task];

//clear inputs after adding the inputs
input_taskName.value="";
