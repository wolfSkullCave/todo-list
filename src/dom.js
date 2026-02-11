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
      button.id = this.getIndex(p.name);

      button.addEventListener("click", () => {
        // this.renderTasks(button.id);
        // console.log(p);
        this.renderCard(button.id);
      });

      this.projectsDiv.appendChild(button);
      // this.renderTasks();
      this.renderCard();
    });
  }

  addProject(newProject) {
    this.projectsList.push(createProject(newProject)); // add newProject to projectsList array
    this.renderProjects();
  }

  getIndex(name, arr = this.projectsList) {
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

  renderCard(index = 0) {
    const container = document.getElementById("card-container");
    const template = document.getElementById("card-template");

    const data = this.projectsList[index].tasks;

    // console.log(data);
    this.changeTaskHeading(index);

    container.innerHTML = "";

    data.forEach((task) => {
      // clone the template content
      const card = template.content.cloneNode(true);

      // populate fields
      card.querySelector(".card-title").textContent = task.name;
      card.querySelector(".card-description").textContent = task.desc;
      card.querySelector(".card-priority").textContent = task.priority;
      card.querySelector(".card-duDate").textContent = task.duDate;
      card.querySelector(".card-status").textContent = task.completed;

      // append to contaienr
      container.appendChild(card);
    });
  }

  changeTaskHeading(index = 0) {
    const h2 = document.getElementById("tasksHeading");
    h2.textContent = this.projectsList[index].name;
  }

  renderTasks(index = 0) {
    const tasksDiv = document.getElementById("tasksDivContent");
    tasksDiv.innerHTML = "";

    this.changeTaskHeading(index);

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
