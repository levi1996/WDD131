let tasks = [];

function newTask() {
  const task = document.querySelector("#todo").value; 
  tasks.push({ detail: task, completed: false }); 
  renderTasks(tasks); 
  document.querySelector("#todo").value = ''; 
}
function renderTasks(tasks) {
    const listElement = document.querySelector("#todoList"); 
  
    const html = tasks.map((task) => `
      <li ${task.completed ? 'class="strike"' : ""}>
        <p>${task.detail}</p>
        <div>
          <span data-function="delete">❎</span>
          <span data-function="complete">✅</span>
        </div>
      </li>`).join(""); 
  
    listElement.innerHTML = html; 
  }
  function removeTask(taskElement) {
    tasks = tasks.filter(
      (task) => task.detail != taskElement.querySelector('p').innerText
    );
    taskElement.remove(); 
  }
  
  function completeTask(taskElement) {
    const taskIndex = tasks.findIndex(
      (task) => task.detail === taskElement.querySelector('p').innerText
    );
    tasks[taskIndex].completed = !tasks[taskIndex].completed; 
    taskElement.classList.toggle("strike"); 
  }
  function manageTasks(e) {
    const parent = e.target.closest("li"); 
    if (e.target.dataset.function === "delete") {
      removeTask(parent);
    } else if (e.target.dataset.function === "complete") {
      completeTask(parent);
    }
  }
  document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

// Render the initial list of tasks when the page loads (if any)
renderTasks(tasks);
