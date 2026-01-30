import { task } from "./task";

export function project(name) {
  return {
    name,
    tasks: [],

    addTask(name, desc, duDate, priority) {
      const newTask = task(name, desc, duDate, priority);
      this.tasks.push(newTask);
    },

    renderProjects() {
      const div = document.getElementById("projectsDiv");
      div.innerHtml = "";

      const h3 = document.createElement("h3");
      h3.textContent = this.name;

      div.appendChild(h3);
    },

    renderTasks() {
      const div = document.getElementById("projectsDiv");
      const ul = document.createElement("ul");
      const li = document.createElement("li");

      this.tasks.forEach((t) => {
        li.textContent = t.name;
        ul.appendChild(li);
      });

      div.appendChild(ul);
    },
  };
}

