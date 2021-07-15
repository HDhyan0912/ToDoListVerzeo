const form = document.getElementById("form");
const input = document.getElementById("input");
const tasksHigh = document.getElementById("tasks-high");
const tasksMid = document.getElementById("tasks-mid");
const tasksLow = document.getElementById("tasks-low");
const priorityValue = document.getElementById("priority");

// Popup for new task
function togglePopup() {
    document.getElementById("popup-container").classList.toggle("active");
}

// Popup for tasks list
function togglePopup1() {
    document.getElementById("task-container").classList.toggle("active");
}

// Getting tasks from localStorage
const hightask = JSON.parse(localStorage.getItem('tasksListHigh'));
const midtask = JSON.parse(localStorage.getItem('tasksListMid'));
const lowtask = JSON.parse(localStorage.getItem('tasksListLow'));

if (hightask) {
    hightask.forEach((task) => {
        addTasksHigh(task);
    })
}

if (midtask) {
    midtask.forEach((task) => {
        addTasksMid(task);
    })
}

if (lowtask) {
    lowtask.forEach((task) => {
        addTasksLow(task);
    })
}

// Create-New-Task Form Submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    togglePopup();
    togglePopup1();

    if (priorityValue.selectedIndex == 1) {
        addTasksMid();
    }
    else if (priorityValue.selectedIndex == 2) {
        addTasksLow();
    }
    else{
        addTasksHigh();
    }
});

function addTasksHigh(task) {
    let taskText = input.value;

    if (task) {
        taskText = task.text;
    }

    if (taskText) {
        const newTask = document.createElement("li");

        if (task && task.completed) {
            newTask.classList.add("completed");
        }

        newTask.innerText = taskText;

        // Left-Click to complete a task 
        newTask.addEventListener("click", () => {
            newTask.classList.toggle("completed");

            updateLS();
        });

        // Right-Click to remove tasks 
        newTask.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            newTask.remove();

            updateLS();
        });

        tasksHigh.appendChild(newTask);
        input.value = "";

        updateLS();
    }
}

function addTasksMid(task) {
    let taskText = input.value;

    if (task) {
        taskText = task.text;
    }

    if (taskText) {
        const newTask = document.createElement("li");

        if (task && task.completed) {
            newTask.classList.add("completed");
        }

        newTask.innerText = taskText;

        // Left-Click to complete a task 
        newTask.addEventListener("click", () => {
            newTask.classList.toggle("completed");

            updateLS();
        });

        // Right-Click to remove tasks 
        newTask.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            newTask.remove();

            updateLS();
        });

        tasksMid.appendChild(newTask);
        input.value = "";

        updateLS();
    }
}

function addTasksLow(task) {
    let taskText = input.value;

    if (task) {
        taskText = task.text;
    }

    if (taskText) {
        const newTask = document.createElement("li");

        if (task && task.completed) {
            newTask.classList.add("completed");
        }

        newTask.innerText = taskText;

        // Left-Click to complete a task 
        newTask.addEventListener("click", () => {
            newTask.classList.toggle("completed");

            updateLS();
        });

        // Right-Click to remove tasks 
        newTask.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            newTask.remove();

            updateLS();
        });

        tasksLow.appendChild(newTask);
        input.value = "";

        updateLS();
    }
}

function updateLS() {
    // Task Priority = High
    const highTasks = tasksHigh.querySelectorAll("li");
    const hightask = [];
    highTasks.forEach((taskEach) => {
        hightask.push({
            text: taskEach.innerText,
            taskStatus: taskEach.classList.contains("completed"),
        });
    });
    
    // Task Priority = Mid
    const tasksEl = tasksMid.querySelectorAll("li");
    const midtask = [];
    tasksEl.forEach((taskEach) => {
        midtask.push({
            text: taskEach.innerText,
            taskStatus: taskEach.classList.contains("completed"),
        });
    });
    
    // Task Priority = Low
    const lowTasks = tasksLow.querySelectorAll("li");
    const lowtask = [];
    lowTasks.forEach((taskEach) => {
        lowtask.push({
            text: taskEach.innerText,
            taskStatus: taskEach.classList.contains("completed"),
        });
    });
    
    // Adding tasks to localStorage with respective names
    localStorage.setItem("tasksListHigh", JSON.stringify(hightask));
    localStorage.setItem("tasksListMid", JSON.stringify(midtask));
    localStorage.setItem("tasksListLow", JSON.stringify(lowtask));
}