
// Popup for new task
function togglePopup() {
    document.getElementById("popup-container").classList.toggle("active")
}

// Get text and dropdown value
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const tastText = document.getElementById("input").value;
    console.log(tastText); // task-text

    const priorityValue=document.getElementById("priority");
    console.log(priorityValue.selectedIndex); //high=0; mid=1; low=2;
});
//Popup for new task ends here


//Popup for tasks

//insert code here

// Popup for tasks ends
