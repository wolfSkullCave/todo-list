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

      button.addEventListener("click", () => {
        this.renderTasks(button.id);
      });

      this.projectsDiv.appendChild(button);
      this.renderTasks();
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

  listTasks(index = 0) {
    console.log(this.projectsList[index].tasks);
    console.log(index);
    console.log(this.projectsList[index]);
  }

  renderTasks(index = 0) {
    const h2 = document.getElementById("tasksHeading");
    const tasksDiv = document.getElementById("tasksDivContent");
    tasksDiv.innerHTML = "";
    h2.textContent = this.projectsList[index].name;

    if (this.projectsList[index].tasks.length > 0) {
      this.projectsList[index].tasks.forEach((t) => {
        const checkboxDiv = document.createElement("div");
        checkboxDiv.classList.add("checkboxDiv");

        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = t.name;

        const label = document.createElement("label");
        label.id = t.name;
        label.textContent = t.name;

        checkboxDiv.appendChild(input);
        checkboxDiv.appendChild(label);
        tasksDiv.appendChild(checkboxDiv);
      });
    } else {
      const p = document.createElement("p");
      p.textContent = "No tasks available";
      tasksDiv.appendChild(p);
    }
  }
}
