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
import { initNewProjectsBtn2 } from "./gui/newProject";
import {
  getAllLocalStorageItems,
  populateStorage,
  saveProject,
} from "./localstorage";
import { initTaskForm } from "./gui/taskForm";
import { loadProjects, addTask } from "./gui/addTasks";
import { controlPanel } from "./gui/controlPanel";
import { renameProject } from "./renameProject";

// create initial project
const defaultProject = new Project({
  name: "default",
});

// create inital task
const defaultTask = new Task({
  name: "First task",
  desc: "Try adding a task",
  dueDate: "Today",
  priority: "High",
  projectId: defaultProject.id,
});

defaultProject.addTask(defaultTask);

// check localStorage for default project
if (localStorage.length === 0) {
  // add the default project to localstorage
  populateStorage(defaultProject.name, defaultProject);
}

const projectsDiv = document.getElementById("projectsDiv");
const cardDiv = document.getElementById("card-container");
const cardTemp = document.getElementById("card-template");
const sidebar = document.querySelector("#projectsDiv");

// Renders projects to page
export const rend = new Render(projectsDiv, cardDiv, cardTemp);
rend.projects();
rend.sidebar(sidebar);

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
  addTask();
});

// initialise control panel gui
controlPanel();

// initialise rename project button
document.getElementById("renameProject").addEventListener("click", (e) => {
  const newName = document.getElementById("renameProjectInput").value;
  const currentProject = document.getElementById("tasksHeading").textContent;

  if (currentProject === "Project") {
    e.preventDefault();
    return console.error("No project selected");
  }

  if (currentProject === undefined) {
    e.preventDefault();
    return console.error("Invalid name");
  }

  try {
    renameProject(currentProject, newName);
  } catch (e) {
    console.error(e);
  }

  rend.sidebar();
  rend.task(projectName);

  // testing
  e.preventDefault();
  console.log("new name: ", newName);
  console.log("current project:", currentProject);
});

// Render the first task in localstorage by default.
if (localStorage.length === 0) {
  const projects = getAllLocalStorageItems();
  rend.task(projects[0]);
  rend.updateTasksHeading(projects[0].name);
}
// Todo: Build a way to edit a task
//  - TODO: Add a delete task button
//  - TODO: Add a complete task button/checkbox

const cardDelBtn = document.querySelector(".card-del");
document.querySelector("#card-container").addEventListener("click", (e) => {
  const delBtn = e.target.closest(".card-del");
  if (!delBtn) return;

  let taskId = e.target.getAttribute("data-task-id");
  let ids = e.target.getAttribute("data-task-id").split("-");
  let projectId = ids[0];

  // remove from dom
  delBtn.parentElement.remove();

  // remove from local storage
  let projects = getAllLocalStorageItems();

  let targetProject = projects.find((p) => p.id == projectId);
  let taskIndex = targetProject.tasklist.findIndex((t) => t.id == taskId);
  if (taskIndex !== -1) {
    targetProject.tasklist.splice(taskIndex, 1);
    let index = projects.findIndex((p) => p.id == projectId);
    projects[index] = targetProject;
    localStorage.setItem("projects", JSON.stringify(projects));
    rend.task(targetProject);
  }


});

// ------------------------------------------------------------------------------
