import { createCard } from "./createCard";

export function renderCards({ project, container, template }) {
  container.innerHTML = "";
  project.tasklist.forEach((task) => {
    createCard({ container: container, template: template, task: task });
  });
}
