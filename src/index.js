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
import { getAllLocalStorageItems, populateStorage } from "./localstorage";
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

// Single render controller: owns sidebar + card event delegation.
export const rend = new Render(projectsDiv, cardDiv, cardTemp);
rend.bindEvents();

initNewProjectsBtn2()
  .then((newProject) => rend.selectProject(newProject.id))
  .catch((err) => console.error(err));

// initialise popup form for adding tasks to a project
initTaskForm();

// load projects into popup forms select
document.getElementById("openFormBtn").addEventListener("click", (e) => {
  loadProjects();
});

// add task to project
document.getElementById("addTaskBtn").addEventListener("click", (e) => {
  addTask();

  // Re-render the current project so the new task shows immediately.
  const currentId = rend.getCurrentProjectId();
  if (currentId) rend.selectProject(currentId);
});

// initialise control panel gui
controlPanel();

// initialise rename project button
document.getElementById("renameProject").addEventListener("click", (e) => {
  e.preventDefault();

  const newName = document.getElementById("renameProjectInput").value.trim();
  const currentId = rend.getCurrentProjectId();

  if (!currentId) return console.error("No project selected");
  if (!newName) return console.error("Invalid name");

  try {
    renameProject(currentId, newName);
  } catch (err) {
    return console.error(err);
  }

  // Re-render so the sidebar label and heading reflect the new name.
  rend.selectProject(currentId);
});

// Select the first project by default (if any exist).
const initialProjects = getAllLocalStorageItems();
if (initialProjects && initialProjects.length > 0) {
  rend.selectProject(initialProjects[0].id);
}

// Card status (complete) and delete clicks are handled by Render's delegated
// listeners (see gui/render.js) — bound once via rend.bindEvents().
// ------------------------------------------------------------------------------
