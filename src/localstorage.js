export function populateStorage(itemName, item) {
  saveProject(item);
}

export function retrieveStorage(item) {
  return getProjects(item);
}

export function getAllLocalStorageItems() {
  return JSON.parse(localStorage.getItem("projects"));
}

export function saveProject(project) {
  let projectsArr = [];
  if (localStorage.length > 0) {
    projectsArr = JSON.parse(localStorage.getItem("projects"));
  }

  projectsArr.push(project);
  localStorage.setItem("projects", JSON.stringify(projectsArr));
}

export function getProjects(projectName) {
  let projects =
    JSON.parse(localStorage.getItem("projects")) ||
    console.error("Project not found");

  return projects.find((item) => item.name === projectName);
}

function checkIfProjectExists(project) {
  const projects = getAllLocalStorageItems();
  projects.foreach((p) => {
    if (p.id === project.id) {
      console.error("project already exists");
      return true;
    }
  });

  return false;
}
