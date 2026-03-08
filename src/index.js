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
import { initNewProjectsBtn } from "./gui/newProject";
import {
  getAllLocalStorageItems,
  populateStorage,
  retrieveStorage,
} from "./localstorage";
import { initTaskForm } from "./gui/taskForm";
import { addTask } from "./gui/newTaskBtn";

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

// render initial project
populateStorage(defaultProject.name, defaultProject);

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
// TODO: refactor this function
initNewProjectsBtn(function () {
  rend.projects();
});
rend.sidebar(sidebar);

// initialise popup form
initTaskForm();

// load projects into popup forms select
document.getElementById("openFormBtn").addEventListener("click", (e) => {
  let projects = getAllLocalStorageItems();
  console.log(projects);

  const select = document.getElementById("taskProjects");
  projects.forEach((p) => {
    const option = document.createElement("option");
    const projectName = p.key;
    option.textContent = projectName;
    option.value = projectName;
    select.appendChild(option);
  });
});

// add task to project
document.getElementById("addTaskBtn").addEventListener("click", (e) => {
  // e.preventDefault();

  const taskName = document.getElementById("taskName").value;
  const taskDesc = document.getElementById("taskDesc").value;
  const taskPriority = document.getElementById("taskPriority").value;
  const taskDueDate = document.getElementById("taskDueDate").value;
  const taskProject = document.getElementById("taskProjects").value;

  const newTask = new Task({
    name: taskName,
    desc: taskDesc,
    dueDate: taskDueDate,
    priority: taskPriority,
  });

  // add task to project
  const project = JSON.parse(localStorage.getItem(taskProject)); // retriev project from local storage
  project.tasklist.push(newTask); // add task to project
  localStorage.setItem(taskProject, JSON.stringify(project)); // save project back to local storage
});

// ------------------------------------------------------------------------------

// TODO: Write code to make the add Task button work
// What project does the new task get assigned to?
// Check the heading for the task name, search the name in the
// projectsList array and add the task to that project
// FIX: projects and tasks that are stated in the code over write any changes made
//      on the site.

// -----------------------------------------------------------

// TODO: Add a remove/delete project button
// Todo: Build a way to change the name of a project (edit a project's name)
// Todo: Build a way to edit a task
// TODO: Add a delete task button
// TODO: Add a complete task button/checkbox
// TODO: Look into storing projects in local storage instead of an array.✅

// ------------------------------------------------------------------------------
