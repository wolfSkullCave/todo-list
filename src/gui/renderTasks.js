import { createCard } from "./createCard";

export function renderCards({ project, container, template }) {
  // recieves a project and loops through it's taskslist array
  // to create a card.
  container.innerHTML = "";

  // console.log("renderTasks.js - renderCards:", project);

  project.tasklist.forEach((task) => {
    createCard({ container: container, template: template, task: task });
  });
}
