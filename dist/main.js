/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_homeSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homeSection */ \"./src/modules/homeSection.js\");\n/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createProject */ \"./src/modules/createProject.js\");\n/* harmony import */ var _modules_createtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createtask */ \"./src/modules/createtask.js\");\n// import the page-load module and call it\r\n\r\n\r\n\r\n\r\ninit();\r\n\r\nfunction init() {\r\n  (0,_modules_homeSection__WEBPACK_IMPORTED_MODULE_0__.initializepage)();\r\n  (0,_modules_createProject__WEBPACK_IMPORTED_MODULE_1__.createProjectDisplay)();\r\n  (0,_modules_createtask__WEBPACK_IMPORTED_MODULE_2__.createTaskDisplay)();\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectDisplay: () => (/* binding */ createProjectDisplay),\n/* harmony export */   displayNewProjects: () => (/* binding */ displayNewProjects),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _createtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createtask */ \"./src/modules/createtask.js\");\n\r\n\r\n// Retrieve Projects and tasks from local storage\r\nlet projects = JSON.parse(localStorage.getItem('projects')) || [];\r\nconsole.log(projects);\r\n\r\n// function to update local storage\r\nfunction updateLocalStorage() {\r\n  localStorage.setItem('projects', JSON.stringify(projects));\r\n}\r\n\r\n// Function to add a project\r\nfunction addProject(projectName) {\r\n  const project = {\r\n    name: projectName,\r\n    tasks: []\r\n  };\r\n  projects.push(project);\r\n  updateLocalStorage();\r\n  displayNewProjects();\r\n}\r\n\r\n// Function create and display new projejcts\r\nfunction displayNewProjects() {\r\n  const projectLists = document.getElementById(\"projectList\");\r\n  projectLists.innerHTML = '';\r\n\r\n  projects.forEach((project, index) => {\r\n    const projectItem = document.createElement(\"div\");\r\n    projectItem.setAttribute('class', \"tiles\", \"projectItem\");\r\n    \r\n    // Create project icons and title\r\n    const projectTitle = document.createElement(\"p\");\r\n    projectTitle.innerText = project.name;\r\n    projectTitle.setAttribute('id', \"projectTitle\");\r\n    const checkListIcon = document.createElement(\"img\");\r\n    checkListIcon.src = \"./images/checklist.png\"\r\n    checkListIcon.classList.add(\"icon\");\r\n    const deleteIcon = document.createElement(\"img\");\r\n    deleteIcon.src = \"./images/cancel.png\"\r\n    deleteIcon.className = \"deleteIcon\";\r\n    deleteIcon.setAttribute(\"data-project-index\", index);\r\n\r\n    \r\n    // Append project icons and title\r\n    projectItem.appendChild(checkListIcon);\r\n    projectItem.appendChild(projectTitle)\r\n    projectItem.appendChild(deleteIcon);\r\n\r\n    projectLists.appendChild(projectItem);\r\n    \r\n    projectItem.addEventListener('click', () => {\r\n      (0,_createtask__WEBPACK_IMPORTED_MODULE_0__.selectProject)(index);\r\n    }, false);\r\n\r\n    // Click event to delete project & prevents further propagation\r\n    deleteIcon.addEventListener('click', (event) => {\r\n      if (event.target.classList.contains(\"deleteIcon\")) {\r\n        // Get the project index from the data attribute\r\n        const projectIndex = parseInt(event.target.getAttribute(\"data-project-index\"));\r\n        deleteProject(projectIndex);\r\n        event.stopImmediatePropagation();\r\n      }\r\n    }, false);\r\n\r\n  });\r\n} \r\n\r\n// Function to display addProject InputBox\r\nfunction createProjectDisplay() {\r\n  const addProjectPopUp = document.getElementById('add-project-popup');\r\n  const addNewProject = document.getElementById('add-new-project');\r\n  const btnCancelProject = document.getElementById('button-cancel-project');\r\n\r\n  addNewProject.addEventListener(\"click\", function() {\r\n    addProjectPopUp.style.display = \"block\";\r\n  });\r\n  \r\n  btnCancelProject.addEventListener(\"click\", function() {\r\n    addProjectPopUp.style.display = \"none\";\r\n  });\r\n  \r\n  // remove later and place it in homesection.js inti()\r\n  displayNewProjects();   \r\n\r\n}\r\n\r\n// Eventlistener to add new project when btn is clicked\r\nconst btnAddProject = document.getElementById(\"button-add-project\");\r\nbtnAddProject.addEventListener(\"click\", () => {\r\n  const projectName = document.getElementById('projectName').value;\r\n  if(projectName == \"\") {\r\n    alert(\"Project name can't be empty\");\r\n    return false;\r\n  } else {\r\n    addProject(projectName);\r\n    displayNewProjects();\r\n    document.getElementById('projectName').value = '';\r\n    return true;\r\n  }\r\n});\r\n\r\n// Function will delete project and its tasks \r\nfunction deleteProject(projectIndex) {\r\n  // Make sure to check if the projectIdex is within a valid range\r\n  if (projectIndex >= 0 && projectIndex < projects.length) {\r\n    // Remove the project from the projects array\r\n    projects.splice(projectIndex, 1);\r\n    // console.log(projects);\r\n    // Update local storage and display the projects\r\n    updateLocalStorage();\r\n    displayNewProjects();\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/createProject.js?");

/***/ }),

/***/ "./src/modules/createtask.js":
/*!***********************************!*\
  !*** ./src/modules/createtask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskFunction: () => (/* binding */ addTaskFunction),\n/* harmony export */   createTaskDisplay: () => (/* binding */ createTaskDisplay),\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks),\n/* harmony export */   selectProject: () => (/* binding */ selectProject)\n/* harmony export */ });\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/modules/createProject.js\");\n\r\n\r\n// Function to add a task to a project\r\nfunction addTask(project, projectIndex, title, details, dueDate) {\r\n  const task = {\r\n    title: title,\r\n    details: details,\r\n    dueDate: dueDate\r\n  };\r\n  _createProject__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks.push(task);\r\n  (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();\r\n  displayTasks(project);\r\n}\r\n\r\n// Function to display tasks of a project\r\nfunction displayTasks(project) {\r\n    const todoList = document.getElementById(\"todo-list\");\r\n    // Clear previous tasks\r\n    todoList.innerHTML = '';\r\n    \r\n    project.tasks.forEach(task => {\r\n      const taskItem = document.createElement('div');\r\n      const taskTitle = document.createElement('h3');\r\n      const taskDesc = document.createElement('p');\r\n      const taskDate = document.createElement('p');\r\n      \r\n      const taskRadio = document.createElement('input')\r\n      taskRadio.setAttribute(\"type\", \"radio\");\r\n\r\n      taskItem.setAttribute('id', \"taskItem\");\r\n      taskTitle.setAttribute('id', \"taskTitle\");\r\n      taskDesc.setAttribute('id', \"taskDesc\");\r\n      taskDate.setAttribute('id', \"taskDate\");\r\n\r\n\r\n      taskTitle.textContent = task.title;\r\n      taskDesc.textContent = task.details;\r\n      taskDate.textContent = task.dueDate;\r\n\r\n      taskItem.appendChild(taskRadio);\r\n      taskItem.appendChild(taskTitle);\r\n      taskItem.appendChild(taskDesc);\r\n      taskItem.appendChild(taskDate);\r\n\r\n      todoList.appendChild(taskItem);\r\n    });\r\n\r\n}\r\n\r\n// Function to select a project\r\nfunction selectProject(projectIndex) {\r\n  const project = _createProject__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex];\r\n  const projectText = document.getElementById('title');\r\n  projectText.textContent = project.name;\r\n\r\n  // Make the addNewTask button visible\r\n  const CreateNewTask = document.getElementById('add-new-task');\r\n  CreateNewTask.style.display = \"flex\";\r\n\r\n  const todoList = document.getElementById(\"todo-list\");\r\n  todoList.innerHTML = ``;\r\n\r\n  displayTasks(project);\r\n  addTaskFunction(project, projectIndex);\r\n}\r\n\r\n// Add Task button click event\r\nfunction addTaskFunction(project, index) {\r\n  const addTaskButton = document.getElementById('button-add-task');\r\n  addTaskButton.addEventListener('click', () => {\r\n    const taskTitle = document.getElementById('input-taskName').value;\r\n    const taskDetails = document.getElementById('taskDesc').value;\r\n    const dueDate = document.getElementById('input-taskDate').value;\r\n\r\n    // Declare current project and its index \r\n    const selectedProject = project;\r\n    const selectedProjectIndex = index;\r\n    // console.log(selectedProjectIndex);\r\n    \r\n    if (taskTitle.trim() !== '') {\r\n      addTask(selectedProject, selectedProjectIndex, taskTitle, taskDetails, dueDate);\r\n\r\n      document.getElementById('input-taskName').value = '';\r\n      document.getElementById('taskDesc').value = '';\r\n      document.getElementById('input-taskDate').value = '';\r\n\r\n      const addtaskPopUp = document.getElementById('add-task-popup');\r\n      addtaskPopUp.style.display = \"none\";\r\n    }\r\n  });\r\n}\r\n\r\n\r\n\r\n\r\n\r\n// Function to display addProject InputBox\r\nfunction createTaskDisplay() {\r\n  const addtaskPopUp = document.getElementById('add-task-popup');\r\n  const addNewtask = document.getElementById('add-new-task');\r\n  const btnCanceltask = document.getElementById('button-cancel-task');\r\n\r\n  addNewtask.addEventListener(\"click\", function() {\r\n    addtaskPopUp.style.display = \"block\";\r\n  });\r\n  \r\n  btnCanceltask.addEventListener(\"click\", function() {\r\n    addtaskPopUp.style.display = \"none\";\r\n  });\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/createtask.js?");

/***/ }),

/***/ "./src/modules/homeSection.js":
/*!************************************!*\
  !*** ./src/modules/homeSection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializepage: () => (/* binding */ initializepage)\n/* harmony export */ });\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/modules/createProject.js\");\n/* harmony import */ var _createtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createtask */ \"./src/modules/createtask.js\");\n\r\n\r\n\r\nfunction inboxAllTask() {\r\n  const inboxText = document.getElementById(\"title\");\r\n  inboxText.textContent = \"Inbox\";\r\n\r\n  _createProject__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {\r\n    (0,_createtask__WEBPACK_IMPORTED_MODULE_1__.displayTasks)(project);\r\n  });\r\n  // selectProject(index);\r\n}\r\n\r\nfunction initializepage() {\r\n  const projectPreview = document.getElementById(\"project-preview\");\r\n  projectPreview.innerHTML = `\r\n    <div class=\"project-title\">\r\n      <h1 id=\"title\"></h1>\r\n    </div>\r\n    <div id=\"todo-container\">\r\n      <div id=\"todo-list\"></div>\r\n      <div class=\"add-task-popup\" id=\"add-task-popup\">\r\n        <input type=\"text\" \r\n          class=\"input-taskName\" \r\n          id=\"input-taskName\" \r\n          placeholder=\"Enter Project Title\"\r\n        >\r\n        <textarea id=\"taskDesc\" cols=\"63\" rows=\"4\"></textarea>\r\n        <input type=\"date\" class=\"input-taskDate\" id=\"input-taskDate\">\r\n        <div class=\"add-task-popup-buttons\">\r\n          <button class=\"button-add-task\" id=\"button-add-task\">Add</button>\r\n          <button class=\"button-cancel-task\" id=\"button-cancel-task\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"tiles none\" id=\"add-new-task\">\r\n      <img src=\"/images/plus-icon.png\" alt=\"\" class=\"icon\">\r\n      <p class=\"data-name\">Add Task</p>\r\n    </div> \r\n  `\r\n\r\n  inboxAllTask();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/homeSection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;