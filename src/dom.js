import { project } from "./project";

const projects = [];

const input = document.getElementById("projectNameInput");
const btn = document.getElementById("addProjectBtn");
const projectsDiv = document.getElementById("projectsDiv");

function renderProjects() {
  projectsDiv.innerHTML = "";

  // render projects from array
  projects.forEach((p) => {
    const h3 = document.createElement("h3");
    h3.textContent = p.name;
    projectsDiv.appendChild(h3);

    // render tasks from array
    const ul = document.createElement("ul");
    p.tasks.forEach((t) => {
      const li = document.createElement("li");

      li.textContent = t.name;
      ul.appendChild(li);
    });

    projectsDiv.appendChild(ul);
  });
}

function addProject(name) {
  if (!name.trim()) return;
  const newProject = project(name);
  projects.push(newProject);
  renderProjects();
}

export function dom() {
  btn.addEventListener("click", () => {
    addProject(input.value);
    input.value = "";
  });
}

// test function for debugging
function test(input) {
  console.log(input);
}
