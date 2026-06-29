import { getAllLocalStorageItems } from "./localstorage";

export function renameProject(projectId, newName) {
  const projects = getAllLocalStorageItems();

  const index = projects.findIndex((project) => project.id == projectId);
  if (index === -1) {
    throw new Error("Project not found");
  }

  projects[index].name = newName;
  localStorage.setItem("projects", JSON.stringify(projects));
}
