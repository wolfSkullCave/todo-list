import { createProject } from "./project";

export class Dom {
  constructor(projectsList = []) {
    this.projectsList = projectsList;

    this.projectsDiv = document.getElementById("projectsDiv");
    this.projectsUl = document.getElementById("projectsUl");

    this.newProjectsInput = document.getElementById("projectNameInput");
    this.newProjectBtn = document.getElementById("addProjectBtn");

    this.newProjectBtn.addEventListener("click", () => {
      if (!this.newProjectsInput.value.trim()) return;
      this.addProject(this.newProjectsInput.value);
      this.newProjectsInput.value = "";
    });
  }

  renderProjects() {
    this.projectsDiv.innerHTML = "";

    // render projects from array
    this.projectsList.forEach((p) => {
      const button = document.createElement("button");
      button.textContent = p.name;
      button.id = this.getIndex(p.name, this.projectsList);

      this.projectsDiv.appendChild(button);
    });
  }

  addProject(newProject) {
    this.projectsList.push(createProject(newProject)); // add newProject to projectsList array
    this.renderProjects();
  }

  getIndex(name, arr) {
    return arr.findIndex((i) => i.name === name);
  }

  listProjects() {
    console.log(this.projectsList);
  }
}
