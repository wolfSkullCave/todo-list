import "./css/reset.css";
import "./css/base.css";
import "./css/layout.css";
import "./css/header.css";
import "./css/sidebar.css";
import "./css/card.css";
import "./css/components.css";
import "./css/forms.css";
import "./css/footer.css";
import "./css/popUpForm.css";
import { Project } from "./Project";
import { Task } from "./Task";
import { Render } from "./gui/render";
import { initNewProjectsBtn, initNewProjectsBtn2 } from "./gui/newProject";
import { getAllLocalStorageItems, populateStorage } from "./localstorage";
import { initTaskForm } from "./gui/taskForm";
import { loadProjects, addProject } from "./gui/addTasks";
import { renameProject } from "./renameProject";
import { controlPanel } from "./gui/controlPanel";

// create inital task
const defaultTask = new Task({
  name: "First task",
  desc: "Try adding a task",
  dueDate: "Today",
  priority: "High",
});

// create initial project
const defaultProject = new Project({
  name: "default",
  tasklist: [defaultTask],
});

// check localStorage for default project
if (localStorage.length === 0) {
  // add the default project to localstorage
  populateStorage(defaultProject.name, defaultProject);
}

// testing new render class
const projectsDiv = document.getElementById("projectsDiv");
const cardDiv = document.getElementById("card-container");
const cardTemp = document.getElementById("card-template");
const sidebar = document.querySelector("#projectsDiv");

// Renders projects to page
export const rend = new Render(projectsDiv, cardDiv, cardTemp);
rend.projects();
rend.sidebar(sidebar);

// Add a new project via gui input field
// initNewProjectsBtn(function () {
//   rend.projects();
// });
// rend.sidebar(sidebar);

initNewProjectsBtn2()
  .then((result) => rend.projects())
  .catch((err) => console.error(err));

// initialise popup form for adding tasks to a project
initTaskForm();

// load projects into popup forms select
document.getElementById("openFormBtn").addEventListener("click", (e) => {
  loadProjects();
});

// add task to project
document.getElementById("addTaskBtn").addEventListener("click", (e) => {
  // e.preventDefault();
  addProject();
});

controlPanel();

// Todo: Build a way to edit a task
//  - TODO: Add a delete task button
//  - TODO: Add a complete task button/checkbox

// TODO: Render the first task in localstorage by default.

// ------------------------------------------------------------------------------
