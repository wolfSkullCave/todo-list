export function renderProjects(projectsList = []) {
  projectsList.forEach((project) => {
    createBtn(project.name, projectsList.indexOf(project), projectsDiv);
  });
}

const projectsDiv = document.getElementById("projectsDiv");

function createBtn(txt, id, parentDiv) {
  const btn = document.createElement("button");

  btn.textContent = txt;
  btn.id = id;

  parentDiv.appendChild(btn);
}
