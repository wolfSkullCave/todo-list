import { createCard } from "./createCard";

// get the project object
export const renderTasks = {
  renderCards({ project, container, template }) {
    project.tasklist.forEach((task) => {
      createCard({ container: container, template: template, task: task });
    });
  },
};
