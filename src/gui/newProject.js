import { Project } from "../Project";
import { populateStorage } from "../localstorage";

export function initNewProjectsBtn(callback) {
  const nameInput = document.getElementById("projectNameInput");
  const addBtn = document.getElementById("addProjectBtn");

  addBtn.addEventListener("click", () => {
    // get the name from the input field
    // create a new project
    if (!nameInput.value) {
      return console.error("Invalid project name");
    }
    const newProject = new Project({ name: nameInput.value });
    // projectsList.push(newProject);
    populateStorage(newProject.name, newProject);
    nameInput.value = "";
    callback();
  });
}
