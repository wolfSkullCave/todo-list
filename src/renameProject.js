export function renameProject(projectName, newName) {
  const project = JSON.parse(localStorage.getItem(projectName));
  localStorage.removeItem(projectName);

  project.name = newName;

  localStorage.setItem(project.name, JSON.stringify(project));
}

