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
    
    project.tasks.forEach((task, index) => {
      const taskItem = document.createElement('div');
      const taskTitle = document.createElement('h3');
      const taskDesc = document.createElement('p');
      const taskDate = document.createElement('p');
      const taskInfos = document.createElement('div');
      
      const taskComplete = document.createElement('input')
      taskComplete.setAttribute("type", "checkbox");
      taskComplete.setAttribute("id", "taskComplete");
      const deleteTask = document.createElement("img");
      deleteTask.src = "./images/cancel.png"
      deleteTask.setAttribute("id", "deleteTask");

      // check complete task
      taskComplete.addEventListener('change', () => {
        checkCompleteTask(taskComplete, taskTitle, taskDesc);
      });

      // Add click event listener to deleteTask
      deleteTask.addEventListener('click', () => {
        deleteTaskAtIndex(index, project);
      });

      taskInfos.setAttribute('id', "taskInfos");
      taskItem.setAttribute('id', "taskItem");
      taskTitle.setAttribute('id', "taskTitle");
      taskDesc.setAttribute('id', "taskDesc");
      taskDate.setAttribute('id', "taskDate");

      taskTitle.textContent = task.title;
      taskDesc.textContent = task.details;
      taskDate.textContent = task.dueDate;

      taskInfos.appendChild(taskTitle);
      taskInfos.appendChild(taskDesc);
      taskItem.appendChild(taskComplete);
      taskItem.appendChild(taskInfos);
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
    const taskDetail = document.getElementById('taskInfo').value;
    const dueDate = document.getElementById('input-taskDate').value;

    // Declare current project and its index 
    const selectedProject = project;
    const selectedProjectIndex = index;
    
    if (taskTitle.trim() !== '') {
      addTask(selectedProject, selectedProjectIndex, taskTitle, taskDetail, dueDate);

      document.getElementById('input-taskName').value = '';
      document.getElementById('taskInfo').value = '';
      document.getElementById('input-taskDate').value = '';

      removeTaskDisplay();
    }
  });
}

// Function to display addProject InputBox
function createTaskDisplay() {
  const addtaskPopUp = document.getElementById('add-task-popup');
  const addNewtask = document.getElementById('add-new-task');

  addNewtask.addEventListener("click", function() {
    addtaskPopUp.style.display = "block";
  });  
}

// Function to remove addproject inputBox
function removeTaskDisplay() {
  const addtaskPopUp = document.getElementById('add-task-popup');
  const btnCanceltask = document.getElementById('button-cancel-task');
  addtaskPopUp.style.display = "none";
  
  btnCanceltask.addEventListener("click", function() {
    addtaskPopUp.style.display = "none";
  });
}

// Function to checklist when task is completed
function checkCompleteTask(checkbox, title, desc) {
  console.log(checkbox.checked);
  if (checkbox.checked) {
    title.classList.add("checked");
    desc.classList.add("checked");
    console.log("checkbox works");
  } else {
    title.classList.remove("checked");
    desc.classList.remove("checked");
    console.log("checkbox not check");
  }
  updateLocalStorage();
}

// Function to delete a task at a specific index 
function deleteTaskAtIndex(taskIndex, project) {
  // Remove the task at the specified index
  project.tasks.splice(taskIndex, 1);
  updateLocalStorage();
  displayTasks(project);
}

function createTaskInit() {
  createTaskDisplay();
  removeTaskDisplay();
}


export { displayTasks, createTaskInit, addTaskFunction, selectProject };
















