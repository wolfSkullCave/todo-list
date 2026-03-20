import { getAllLocalStorageItems } from "./localstorage";

export function renameProject(projectName, newName) {
  // get the array of projects from local storage
  const projects = getAllLocalStorageItems();

  // add new task to the selected project
  const index = projects.findIndex((project) => project.name === projectName);
  projects[index].name = newName;

  // clear storage and add back all projects
  localStorage.clear();
  localStorage.setItem("projects", JSON.stringify(projects));
}
