import { renderProjects } from "./renderProjects";
import { renderTasks, renderCards } from "./renderTasks";

// Consolodates rendering of projects and tasks
export class Render {
  constructor(projectList, projectDiv, taskDiv, cardTemplate) {
    this.projectList = projectList;
    this.projectDiv = projectDiv;
    this.taskDiv = taskDiv;
    this.cardTemplate = cardTemplate;
  }

  projects() {
    renderProjects({
      projectsList: this.projectList,
      container: this.projectDiv,
    });
  }

  sidebar(sidebarDiv) {
    // Rendering of user made projects

    // use event delegation to add an event listener to the sidebar buttons
    // Clicking on the buttons in the sidebar renders tasks
    sidebarDiv.addEventListener("click", (event) => {
      // find the nearest button ancestor of the click target
      const btn = event.target.closest("button");
      if (!btn || !sidebarDiv.contains(btn)) return; // ignore clicks outside of buttons

      // renders tasks of the button clicked
      this.task(this.projectList[btn.id]);
      updateTasksHeading(this.projectList[btn.id].name);
    });
  }

  task(project) {
    renderCards({
      project: project,
      container: this.taskDiv,
      template: this.cardTemplate,
    });
  }
}

function updateTasksHeading(newHeading) {
  document.getElementById("tasksHeading").textContent = newHeading;
}
