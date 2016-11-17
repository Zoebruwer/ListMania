

function displayList() 
{
    //Display dynamic HML Lists
    //UI & Li Tags
    //Remove Button Displays
}
function addTask()
{
    //Add in the tasks from out input field in our HTML File 
    //Display the Latest list of tasks
    displayList();
}


displayList();
document.getElementById("Add").addEventListener("click",addTask);