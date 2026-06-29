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

    callback(); // meant to re-render the projects
  });
}

export function initNewProjectsBtn2() {
  const nameInput = document.getElementById("projectNameInput");
  const addBtn = document.getElementById("addProjectBtn");

  return new Promise((resolve, reject) => {
    addBtn.addEventListener("click", () => {
      // get the name from the input field
      const name = nameInput.value.trim();
      // create a new project
      if (!name) {
        console.error("Invalid project name");
        reject(new Error("Invalid project name"));
        return;
      }

      const newProject = new Project({ name });
      populateStorage(newProject.name, newProject);
      nameInput.value = "";

      resolve(newProject); // resovle with the new project
    });
  });
}
