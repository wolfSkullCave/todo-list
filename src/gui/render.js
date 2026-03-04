import { retrieveStorage } from "../localstorage";
import { renderProjects, renderProjects2 } from "./renderProjects";
import { renderCards } from "./renderTasks";

// Consolodates rendering of projects and tasks
export class Render {
  constructor(projectList, projectDiv, taskDiv, cardTemplate) {
    this.projectList = projectList;
    this.projectDiv = projectDiv;
    this.taskDiv = taskDiv;
    this.cardTemplate = cardTemplate;
  }

  projects() {
    // renderProjects({
    //   projectsList: this.projectList,
    //   container: this.projectDiv,
    // });
    renderProjects2(this.projectDiv);
  }

  sidebar(sidebarDiv) {
    // Uses event delegation to add an event listeners to the sidebar buttons
    sidebarDiv.addEventListener("click", (event) => {
      // find the nearest button ancestor of the click target
      const btn = event.target.closest("button");
      if (!btn || !sidebarDiv.contains(btn)) return; // ignore clicks outside of buttons

      // Clicking on the buttons in the sidebar renders tasks
      // this.task(this.projectList[btn.id]);

      const project = retrieveStorage(btn.textContent);
      this.task(project);

      this.updateTasksHeading(project.name);
    });
  }

  task(project) {
    renderCards({
      project: project,
      container: this.taskDiv,
      template: this.cardTemplate,
    });
  }

  updateTasksHeading(newHeading) {
    document.getElementById("tasksHeading").textContent = newHeading;
  }
}
