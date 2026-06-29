import {
  getAllLocalStorageItems,
  getProjects,
  saveProject,
} from "../localstorage";
import { Task } from "../Task";

export function loadProjects() {
  let projects = getAllLocalStorageItems();

  const select = document.getElementById("taskProjects");
  projects.forEach((p) => {
    const option = document.createElement("option");
    const projectName = p.name;
    option.textContent = projectName;
    option.value = projectName;
    select.appendChild(option);
  });
}

export function addTask() {
  const taskName = document.getElementById("taskName").value;
  const taskDesc = document.getElementById("taskDesc").value;
  const taskPriority = document.getElementById("taskPriority").value;
  const taskDueDate = document.getElementById("taskDueDate").value;
  const taskProject = document.getElementById("taskProjects").value;

  // get the array of projects from local storage
  const projects = getAllLocalStorageItems();

  // add new task to the selected project
  const index = projects.findIndex((project) => project.name === taskProject);

  const newTask = new Task({
    name: taskName,
    desc: taskDesc,
    dueDate: taskDueDate,
    priority: taskPriority,
    projectId: projects[index].id,
  });

  projects[index].tasklist.push(newTask);

  // clear storage and add back all projects
  localStorage.clear();
  localStorage.setItem("projects", JSON.stringify(projects));
}
