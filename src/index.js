// import the page-load module and call it
import { initializepage, HomePageInit } from "./modules/homeSection";
import { createProjectDisplay } from "./modules/createProject";
import { createTaskDisplay } from "./modules/createtask";

init();

function init() {
  initializepage();
  createProjectDisplay();
  HomePageInit();
}


// Checklist to do later(Continue)
// - add checkbox to task factory function
// - display for home section
// - make website responsive
// - add hamburger menu
// - add day/night mode
// - task editing feature