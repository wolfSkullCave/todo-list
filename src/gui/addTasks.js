import { getAllLocalStorageItems } from "../localstorage";
import { Task } from "../Task";

export function loadProjects() {
  let projects = getAllLocalStorageItems();

  const select = document.getElementById("taskProjects");
  projects.forEach((p) => {
    const option = document.createElement("option");
    const projectName = p.key;
    option.textContent = projectName;
    option.value = projectName;
    select.appendChild(option);
  });
}

export function addProject() {
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
}
