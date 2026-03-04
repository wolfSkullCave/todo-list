import { Render } from "./render";
import { Project } from "../Project";

const projectsDiv = document.getElementById("projectsDiv");
const cardDiv = document.getElementById("card-container");
const cardTemp = document.getElementById("card-template");
const sidebar = document.querySelector("#projectsDiv");

export function addProject(projectsList) {
  const render = new Render(projectsList, projectsDiv, cardDiv, cardTemp);

  const nameInput = document.getElementById("projectNameInput");
  const addBtn = document.getElementById("addProjectBtn");

  addBtn.addEventListener("click", () => {
    // get the name from the input field
    // create a new project
    const newProject = new Project({ name: nameInput.value });
    projectsList.push(newProject);
    render.projects(); // This bit is prime for refactoring. 
    nameInput.value = "";
  });
}
