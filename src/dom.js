import { project } from "./project";

const projects = [];

const input = document.getElementById("projectNameInput");
const btn = document.getElementById("addProjectBtn");

export function dom() {
  btn.addEventListener("click", () => {
    const newProject = project(input.value);

    projects.push(newProject);
    console.log(projects);

    input.value = "";

    newProject.renderProjects();
    newProject.renderTasks();
  });
}

function test(input) {
  console.log(input);
}

export function dom2() {
  return {
    renderProjects(div, projects) {
      div.innerHTML = "";

      projects.forEach((p) => {
        const h3 = document.createElement("h3");
        h3.textContent = p.name;
        div.appendChild(h3);
      });
    },
  };
}
