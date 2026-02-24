import { renderProjects } from "./renderProjects";
import { renderTasks } from "./renderTasks";

// Consolodates rendering of projects and tasks
export const render = {
  projects(projectsList) {
    const projectsDiv = document.getElementById("projectsDiv");
    renderProjects({ projectsList: projectsList, container: projectsDiv });
  },
  tasks(projectsList) {
    const cont = document.getElementById("card-container");
    const temp = document.getElementById("card-template");

    if (projectsList.length === 1) {
      // Initial rendering of default project
      renderTasks.renderCards({
        project: projectsList[0],
        container: cont,
        template: temp,
      });
      updateTasksHeading(projectsList[0].name);
    } else {
      // Rendering of user made projects
      const sidebar = document.querySelector("#projectsDiv");

      // use event delegation to add an event listener to the sidebar buttons
      sidebar.addEventListener("click", (event) => {
        // find the nearest button ancestor of the click target
        const btn = event.target.closest("button");
        if (!btn || !sidebar.contains(btn)) return; // ignore clicks outside of buttons

        renderTasks.renderCards({
          project: projectsList[btn.id],
          container: cont,
          template: temp,
        });

        updateTasksHeading(projectsList[btn.id].name);
      });
    }
  },
};

function updateTasksHeading(newHeading) {
  document.getElementById("tasksHeading").textContent = newHeading;
}
