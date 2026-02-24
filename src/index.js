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
import { render } from "./gui/render";

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

render.projects(projectsList);
render.tasks(projectsList);

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
projectsList.push(study);

render.projects(projectsList);
render.tasks(projectsList);
// ------------------------------------------------------------------------------

// Todo: Hook up add task to button
const addTaskBtn = document.getElementById("addProjectBtn");
addTaskBtn.addEventListener("click", () => {
  const projectName = document.getElementById("projectNameInput");
  const project = new Project({ name: projectName });

  if (project.value !== "") {
    console.log(project);
    projectsList.push(project.value);
    renderProjects({ project: projectsList, container: projectsDiv });
  }
});

// Todo: Hook up add project to button

// TODO: Add a remove/delete project button
// Todo: Build a way to change the name of a project (edit a project's name)
// Todo: Build a way to edit a task
// TODO: Add a delete task button
// TODO: Add a complete task button/checkbox

// ------------------------------------------------------------------------------
