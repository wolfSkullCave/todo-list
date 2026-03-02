import { render } from "./render";
import { Project } from "../Project";

export function addProject(projectsList) {
  const nameInput = document.getElementById("projectNameInput");
  const addBtn = document.getElementById("addProjectBtn");

  addBtn.addEventListener("click", () => {
    // get the name from the input field
    // create a new project
    const newProject = new Project({ name: nameInput.value });
    projectsList.push(newProject);
    render.projects(projectsList);
    nameInput.value = "";
  });
}
