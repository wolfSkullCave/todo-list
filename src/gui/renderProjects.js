import { getProjects, retrieveStorage } from "../localstorage";

export function renderProjects({ projectsList = [], container }) {
  container.innerHTML = "";
  projectsList.forEach((project) => {
    createBtn(project.name, projectsList.indexOf(project), container);
  });
}

export function renderProjects2(container) {
  container.innerHTML = "";
  // for (let i = 0; i < localStorage.length; i++) {
  //   const key = localStorage.key(i);
  //   const value = retrieveStorage(key);
  //   console.log(key)
  //   console.log(value)
  //   createBtn(value.name, i, container);

  // }
  const projects = JSON.parse(localStorage.getItem("projects"));
  projects.forEach((task) => {
    createBtn(task.name, task.id, container);
  });
}

function createBtn(txt, id, parentDiv) {
  const btn = document.createElement("button");

  btn.textContent = txt;
  btn.id = id;

  parentDiv.appendChild(btn);
}
