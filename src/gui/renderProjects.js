import { getAllLocalStorageItems } from "../localstorage";

export function renderProjects(container, activeId) {
  container.innerHTML = "";

  const projects = getAllLocalStorageItems() || [];

  projects.forEach((project) => {
    createBtn(project, container, activeId);
  });
}

function createBtn(project, parentDiv, activeId) {
  const btn = document.createElement("button");

  btn.textContent = project.name;
  // Store the real id so clicks can be resolved by id, not by name.
  btn.dataset.id = project.id;

  if (project.id == activeId) {
    btn.classList.add("active");
  }

  parentDiv.appendChild(btn);
}
