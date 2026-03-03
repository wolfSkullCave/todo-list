import { createCard } from "./createCard";

// get the project object
export const renderTasks = {
  renderCards({ project, container, template }) {
    container.innerHTML = "";
    project.tasklist.forEach((task) => {
      createCard({ container: container, template: template, task: task });
    });
  },
};

export function renderCards({ project, container, template }) {
  container.innerHTML = "";
  project.tasklist.forEach((task) => {
    createCard({ container: container, template: template, task: task });
  });
}
