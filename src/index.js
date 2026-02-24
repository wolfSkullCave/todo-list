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
const cont = document.getElementById("card-container");
const temp = document.getElementById("card-template");

if (projectsList.length === 1) {
  // Initial rendering of default project
  renderTasks.renderCards({
    project: projectsList[0],
    container: cont,
    template: temp,
  });
  updateTasksHeading(projectsList[0].name);
} else {
  // Rendering of user made projects
  const sidebar = document.querySelector("#projectsDiv");

  // use event delegation to add an event listener to the sidebar buttons
  sidebar.addEventListener("click", (event) => {
    // find the nearest button ancestor of the click target
    const btn = event.target.closest("button");
    if (!btn || !sidebar.contains(btn)) return; // ignore clicks outside of buttons

    renderTasks.renderCards({
      project: projectsList[btn.id],
      container: cont,
      template: temp,
    });

    updateTasksHeading(projectsList[btn.id].name);
  });
}

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

// updates the Heading in the tasks pannel/section
function updateTasksHeading(newHeading) {
  document.getElementById("tasksHeading").textContent = newHeading;
}

// Todo: Hook up add task to button

// Todo: Hook up add project to button
// Todo: Build a way to change the name of a project (edit a project's name)
// Todo: Build a way to edit a task
