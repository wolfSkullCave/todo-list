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
import { renderProjects } from "./gui/renderProjects";
import { renderTasks } from "./gui/renderTasks";

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

// Render a list of projects in the sidebar as buttons
const projectsDiv = document.getElementById("projectsDiv");
renderProjects({ projectsList: projectsList, container: projectsDiv });

// Render the tasks in a project

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

// testing projects class
const chores = new Project({ name: "chores", tasklist: [dishes, vaccume] });
const study = new Project({ name: "study" });
projectsList.push(chores);
projectsList.push(study);

// testing renderProjects function
renderProjects({ projectsList: projectsList, container: projectsDiv });

// TODO: Build task renderer
const cont = document.getElementById("card-container");
const temp = document.getElementById("card-template");

renderTasks.renderCards({ project: chores, container: cont, template: temp });
document.getElementById("tasksHeading").textContent = "Chores";

// TODO: link task renderer to side bar buttons

// Todo: Hook up add task to button
// Todo: Hook up add project to button
// Todo: Build a way to change the name of a project (edit a project's name)
// Todo: Build a way to edit a task
