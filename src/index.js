document.addEventListener("DOMContentLoaded", () => {
  // your code here
console.log("Hello World")
  const form = document.getElementById("create-task-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const taskList = document.getElementById("tasks")
    const newTask = document.querySelector("#new-task-description").value
    console.log(newTask)
    //newTask.select()
    li = document.createElement('li')
    li.innerHtml = ""${newTask}""
    taskList.appendChild(newTask)
  })
});
