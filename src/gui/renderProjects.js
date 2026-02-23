export function renderProjects({ projectsList = [], container }) {
  container.innerHTML = "";
  projectsList.forEach((project) => {
    createBtn(project.name, projectsList.indexOf(project), container);
  });
}

function createBtn(txt, id, parentDiv) {
  const btn = document.createElement("button");

  btn.textContent = txt;
  btn.id = id;

  parentDiv.appendChild(btn);
}
