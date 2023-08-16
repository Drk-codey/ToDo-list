import { projects, updateLocalStorage } from "./createProject";

// Function to add a task to a project
function addTask(project, projectIndex, title, details, dueDate) {
  const task = {
    title: title,
    details: details,
    dueDate: dueDate
  };
  projects[projectIndex].tasks.push(task);
  updateLocalStorage();
  displayTasks(project);
}

// Function to display tasks of a project
function displayTasks(project) {
    const todoList = document.getElementById("todo-list");
    // Clear previous tasks
    todoList.innerHTML = '';
    
    project.tasks.forEach(task => {
      const taskItem = document.createElement('div');
      const taskTitle = document.createElement('h3');
      const taskDesc = document.createElement('p');
      const taskDate = document.createElement('p');
      
      const taskComplete = document.createElement('input')
      taskComplete.setAttribute("type", "checkbox");
      taskComplete.setAttribute("id", "taskComplete");
      const deleteTask = document.createElement("img");
      deleteTask.src = "./images/cancel.png"
      deleteTask.setAttribute("id", "deleteTask");

      taskItem.setAttribute('id', "taskItem");
      taskTitle.setAttribute('id', "taskTitle");
      taskDesc.setAttribute('id', "taskDesc");
      taskDate.setAttribute('id', "taskDate");

      taskTitle.textContent = task.title;
      taskDesc.textContent = task.details;
      taskDate.textContent = task.dueDate;

      taskItem.appendChild(taskComplete);
      taskItem.appendChild(taskTitle);
      taskItem.appendChild(taskDesc);
      taskItem.appendChild(taskDate);
      taskItem.appendChild(deleteTask);

      todoList.appendChild(taskItem);
    });

}

// Function to select a project
function selectProject(projectIndex) {
  const project = projects[projectIndex];
  const projectText = document.getElementById('title');
  projectText.textContent = project.name;

  // Make the addNewTask button visible
  const CreateNewTask = document.getElementById('add-new-task');
  CreateNewTask.style.display = "flex";

  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = ``;

  displayTasks(project);
  addTaskFunction(project, projectIndex);
}

// Add Task button click event
function addTaskFunction(project, index) {
  const addTaskButton = document.getElementById('button-add-task');
  addTaskButton.addEventListener('click', () => {
    const taskTitle = document.getElementById('input-taskName').value;
    const taskDetail = document.querySelector('textarea').value;
    const dueDate = document.getElementById('input-taskDate').value;

    // Declare current project and its index 
    const selectedProject = project;
    const selectedProjectIndex = index;
    // console.log(selectedProjectIndex);
    
    if (taskTitle.trim() !== '') {
      addTask(selectedProject, selectedProjectIndex, taskTitle, taskDetail, dueDate);

      document.getElementById('input-taskName').value = '';
      document.document.querySelector('textarea').value = '';
      document.getElementById('input-taskDate').value = '';

      const addtaskPopUp = document.getElementById('add-task-popup');
      addtaskPopUp.style.display = "none";
    }
  });
}





// Function to display addProject InputBox
function createTaskDisplay() {
  const addtaskPopUp = document.getElementById('add-task-popup');
  const addNewtask = document.getElementById('add-new-task');
  const btnCanceltask = document.getElementById('button-cancel-task');

  addNewtask.addEventListener("click", function() {
    addtaskPopUp.style.display = "block";
  });
  
  btnCanceltask.addEventListener("click", function() {
    addtaskPopUp.style.display = "none";
  });
}



export { displayTasks, createTaskDisplay, addTaskFunction, selectProject };
















