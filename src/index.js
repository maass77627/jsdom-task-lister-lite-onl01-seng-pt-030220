document.addEventListener("DOMContentLoaded", () => {
  // your code here
console.log("Hello World")
  const form = document.getElementById("create-task-form").addEventListener("click", function(e) {
    e.preventDefault();

    const taskList = document.getElementById("tasks")
    const newTask = document.getElementById("new-task-description")
    newTask.select()
    //taskList.appendChild()
  })
});
