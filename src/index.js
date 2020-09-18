document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.getElementById("create-task-form").addEventListener("click", function(e) {
    e.preventDefault();
    let taskList = document.getElementById("tasks")
    let newTask = document.getElementById("new-task-description")
    newTask.select()
    //taskList.appendChild()
  })
});
