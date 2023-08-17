import { displayTasks, selectProject } from "./createtask";

// Retrieve Projects and tasks from local storage
let projects = JSON.parse(localStorage.getItem('projects')) || [];
console.log(projects);

// function to update local storage
function updateLocalStorage() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// Function to add a project
function addProject(projectName) {
  const project = {
    name: projectName,
    tasks: []
  };
  projects.push(project);
  updateLocalStorage();
  displayNewProjects();
}

// Function create and display new projejcts
function displayNewProjects() {
  const projectLists = document.getElementById("projectList");
  projectLists.innerHTML = '';

  projects.forEach((project, index) => {
    const projectItem = document.createElement("div");
    projectItem.setAttribute('class', "tiles", "projectItem");
    
    // Create project icons and title
    const projectTitle = document.createElement("p");
    projectTitle.innerText = project.name;
    projectTitle.setAttribute('id', "projectTitle");
    const checkListIcon = document.createElement("img");
    checkListIcon.src = "./images/checklist.png";
    checkListIcon.classList.add("icon");
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./images/cancel.png"
    deleteIcon.className = "deleteIcon";
    deleteIcon.setAttribute("data-project-index", index);

    
    // Append project icons and title
    projectItem.appendChild(checkListIcon);
    projectItem.appendChild(projectTitle)
    projectItem.appendChild(deleteIcon);

    projectLists.appendChild(projectItem);
    
    projectItem.addEventListener('click', () => {
      selectProject(index);
    }, false);

    // Click event to delete project & prevents further propagation
    deleteIcon.addEventListener('click', (event) => {
      if (event.target.classList.contains("deleteIcon")) {
        // Get the project index from the data attribute
        const projectIndex = parseInt(event.target.getAttribute("data-project-index"));
        deleteProject(projectIndex);
        event.stopImmediatePropagation();
      }
    }, false);

  });
} 

// Function to display addProject InputBox
function createProjectDisplay() {
  const addProjectPopUp = document.getElementById('add-project-popup');
  const addNewProject = document.getElementById('add-new-project');
  const btnCancelProject = document.getElementById('button-cancel-project');

  addNewProject.addEventListener("click", function() {
    addProjectPopUp.style.display = "block";
  });
  
  btnCancelProject.addEventListener("click", function() {
    addProjectPopUp.style.display = "none";
  });
  
  // remove later and place it in homesection.js inti()
  displayNewProjects();
}

// Eventlistener to add new project when btn is clicked
const btnAddProject = document.getElementById("button-add-project");
btnAddProject.addEventListener("click", () => {
  const projectName = document.getElementById('projectName').value;
  if(projectName == "") {
    alert("Project name can't be empty");
    return false;
  } else {
    addProject(projectName);
    displayNewProjects();
    document.getElementById('projectName').value = '';
    return true;
  }
});

// Function will delete project and its tasks 
function deleteProject(projectIndex) {
  // Make sure to check if the projectIdex is within a valid range
  if (projectIndex >= 0 && projectIndex < projects.length) {
    // Remove the project from the projects array
    projects.splice(projectIndex, 1);
    // console.log(projects);
    // Update local storage and display the projects
    updateLocalStorage();
    displayNewProjects();
  }
}


export  { projects, updateLocalStorage, displayNewProjects, createProjectDisplay };