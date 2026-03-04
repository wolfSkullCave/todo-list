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
import { populateStorage, retrieveStorage } from "./localstorage";

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

const projectsList = [defaultProject];
populateStorage(defaultProject.name, defaultProject);

// testing new render class
const projectsDiv = document.getElementById("projectsDiv");
const cardDiv = document.getElementById("card-container");
const cardTemp = document.getElementById("card-template");
const sidebar = document.querySelector("#projectsDiv");

const rend = new Render(projectsList, projectsDiv, cardDiv, cardTemp);
rend.projects();
rend.sidebar(sidebar);
rend.task(projectsList[0]); // renders the first project's tasks
rend.updateTasksHeading(projectsList[0].name);

// Add a new project via gui input field
// TODO: refactor this function
initNewProjectsBtn(function () {
  rend.projects();
});
rend.sidebar(sidebar);

// ------------------------------------------------------------------------------

// testing tasks class
const dishes = new Task({
  name: "dishes",
  desc: "wash dishes after supper",
  dueDate: "daily",
  priority: "low",
});

const vaccume = new Task({
  desc: "Vaccume kitchen floor",
  name: "Vaccume kitchen",
  dueDate: "Weekly",
  priority: "low",
});

const js = new Task({
  name: "JavaScript",
  desc: "Study JavaScript",
  dueDate: "Daily",
  priority: "Medium",
});

// testing projects class
const chores = new Project({ name: "chores", tasklist: [dishes, vaccume] });
const study = new Project({ name: "study", tasklist: [js] });
projectsList.push(chores);
populateStorage(chores.name, chores);
projectsList.push(study);
populateStorage(study.name, study);

rend.projects(); // Renders the new projects in the sidebar

// ------------------------------------------------------------------------------

// TODO: Write code to make the add Task button work
// What project does the new task get assigned to?
// Check the heading for the task name, search the name in the
// projectsList array and add the task to that project

import { initTaskForm } from "./gui/taskForm";
initTaskForm();
const addTaskBtn = document.getElementById("openFormBtn");
const saveTaskBtn = document.getElementById("addTaskBtn");

const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDesc");
const taskPriority = document.getElementById("taskPriority");
const taskDueDate = document.getElementById("taskDueDate");

// -----------------------------------------------------------

// TODO: Add a remove/delete project button
// Todo: Build a way to change the name of a project (edit a project's name)
// Todo: Build a way to edit a task
// TODO: Add a delete task button
// TODO: Add a complete task button/checkbox
// TODO: Look into storing projects in local storage instead of an array.✅

// ------------------------------------------------------------------------------
