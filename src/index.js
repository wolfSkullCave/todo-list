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

const defaultTask = new Task({
  name: "First task",
  desc: "Try adding a task",
  dueDate: "Today",
  priority: "High",
});

const defaultProject = new Project({
  name: "default",
  tasklist: [defaultTask],
});

populateStorage(defaultProject.name, defaultProject);

// testing new render class
const projectsDiv = document.getElementById("projectsDiv");
const cardDiv = document.getElementById("card-container");
const cardTemp = document.getElementById("card-template");
const sidebar = document.querySelector("#projectsDiv");

const rend = new Render(projectsDiv, cardDiv, cardTemp);
rend.projects();
rend.sidebar(sidebar);

// Add a new project via gui input field
// TODO: refactor this function
initNewProjectsBtn(function () {
  rend.projects();
});
rend.sidebar(sidebar);

// ------------------------------------------------------------------------------

// testing tasks class
// const dishes = new Task({
//   name: "dishes",
//   desc: "wash dishes after supper",
//   dueDate: "daily",
//   priority: "low",
// });

// const vaccume = new Task({
//   desc: "Vaccume kitchen floor",
//   name: "Vaccume kitchen",
//   dueDate: "Weekly",
//   priority: "low",
// });

// const js = new Task({
//   name: "JavaScript",
//   desc: "Study JavaScript",
//   dueDate: "Daily",
//   priority: "Medium",
// });

// // testing projects class
// const chores = new Project({ name: "chores", tasklist: [dishes, vaccume] });
// const study = new Project({ name: "study", tasklist: [js] });
// populateStorage(chores.name, chores);
// populateStorage(study.name, study);

// // Renders the new projects in the sidebar
// rend.projects();

// ------------------------------------------------------------------------------

// TODO: Write code to make the add Task button work
// What project does the new task get assigned to?
// Check the heading for the task name, search the name in the
// projectsList array and add the task to that project
// FIX: projects and tasks that are stated in the code over write any changes made
//      on the site.

import { initTaskForm } from "./gui/taskForm";
initTaskForm();
const addTaskBtn = document.getElementById("openFormBtn");
const saveTaskBtn = document.getElementById("addTaskBtn");

saveTaskBtn.addEventListener("click", (e) => {
  // e.preventDefault();

  const taskName = document.getElementById("taskName").value;
  const taskDesc = document.getElementById("taskDesc").value;
  const taskPriority = document.getElementById("taskPriority").value;
  const taskDueDate = document.getElementById("taskDueDate").value;
  const taskProject = document.getElementById("taskProjects").value;

  // validate the form values
  const hasEmpty = [
    taskDesc,
    taskDueDate,
    taskName,
    taskPriority,
    taskProject,
  ].some((item) => item === null || item === "");

  if (hasEmpty) return console.error("Fill in all values");

  const newTask = new Task({
    name: taskName,
    desc: taskDesc,
    dueDate: taskDueDate,
    priority: taskPriority,
  });

  // add task to project

  try {
    const project = retrieveStorage(taskProject);
    project.tasklist.push(newTask);
    populateStorage(taskProject, project);
    rend.task(project);
  } catch (e) {
    console.error("Error:", e);
  } finally {
    const popup = document.getElementById("popupForm");
    popup.style.display = "none";
  }
});

addTaskBtn.addEventListener("click", () => {
  const projects = getAllLocalStorageItems();
  const select = document.getElementById("taskProjects");

  projects.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.key;
    option.textContent = item.value.name;
    select.appendChild(option);
  });
});

// -----------------------------------------------------------

// TODO: Add a remove/delete project button
// Todo: Build a way to change the name of a project (edit a project's name)
// Todo: Build a way to edit a task
// TODO: Add a delete task button
// TODO: Add a complete task button/checkbox
// TODO: Look into storing projects in local storage instead of an array.✅

// ------------------------------------------------------------------------------
