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
  const projects = getAllLocalStorageItems() || [];

  // Upsert: replace the project if it already exists, otherwise append it.
  const index = projects.findIndex((p) => p.id == project.id);
  if (index === -1) {
    projects.push(project);
  } else {
    projects[index] = project;
  }

  localStorage.setItem("projects", JSON.stringify(projects));
}

export function getProjectById(id) {
  const projects = getAllLocalStorageItems();
  if (!projects) return undefined;
  return projects.find((p) => p.id == id);
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
