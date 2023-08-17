import { projects, displayNewProjects } from "./createProject";
import { createTaskInit, selectProject, displayTasks, } from "./createtask";

function HomePageInit() {
  createTaskInit();
}

function inboxAllTask() {
  const inboxText = document.getElementById("title");
  inboxText.textContent = "Inbox";
    
  projects.forEach((project) => {
    displayTasks(project);
  });
}

function initializepage() {
  const projectPreview = document.getElementById("project-preview");
  projectPreview.innerHTML = `
    <div class="project-title">
      <h1 id="title"></h1>
    </div>
    <div id="todo-container">
      <div id="todo-list"></div>
      <div class="add-task-popup" id="add-task-popup">
        <input type="text" 
          class="input-taskName" 
          id="input-taskName" 
          placeholder="Enter Project Title"
        >
        <textarea id="taskInfo" cols="63" rows="4"></textarea>
        <input type="date" class="input-taskDate" id="input-taskDate">
        <div class="add-task-popup-buttons">
          <button class="button-add-task" id="button-add-task">Add</button>
          <button class="button-cancel-task" id="button-cancel-task">Cancel</button>
        </div>
      </div>
    </div>

    <div class="tiles none" id="add-new-task">
      <img src="/images/plus-icon.png" alt="" class="icon">
      <p class="data-name">Add Task</p>
    </div> 
  `

  inboxAllTask();
}

export { initializepage, HomePageInit };
