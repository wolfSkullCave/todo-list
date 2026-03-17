import { retrieveStorage } from "../localstorage";
import { renderProjects2 } from "./renderProjects";
import { renderCards } from "./renderTasks";

// Consolodates rendering of projects and tasks
export class Render {
  constructor(projectDiv, taskDiv, cardTemplate) {
    this.projectDiv = projectDiv;
    this.taskDiv = taskDiv;
    this.cardTemplate = cardTemplate;
    this.currentProject = undefined;
  }

  projects() {
    renderProjects2(this.projectDiv);
  }

  sidebar(sidebarDiv) {
    // Uses event delegation to add an event listeners to the sidebar buttons
    sidebarDiv.addEventListener("click", (event) => {
      // find the nearest button ancestor of the click target
      const btn = event.target.closest("button");
      if (!btn || !sidebarDiv.contains(btn)) return; // ignore clicks outside of buttons

      // old delete project button
      // if (btn.id.includes("del")) {
      //   this.removeProject(btn);
      //   this.projects(); // re-render sidebar
      //   return;
      // }

      // Clicking on the buttons in the sidebar renders tasks
      // this.task(this.projectList[btn.id]);

      const project = retrieveStorage(btn.textContent);
      this.task(project);

      this.updateTasksHeading(project.name);
      this.currentProject = project.name;
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

  getCurrentProject() {
    return this.currentProject;
  }

  // old delete project button
  removeProject(btn) {
    const index = btn.id.split("-")[1];
    const key = document.getElementById(index).textContent;
    console.log(key);
    localStorage.removeItem(key);
  }

}
