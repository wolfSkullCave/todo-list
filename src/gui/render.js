import { getProjectById, saveProject } from "../localstorage";
import { renderProjects } from "./renderProjects";
import { renderCards } from "./renderTasks";

// Single render controller. Owns the current-project state plus all of the
// sidebar/card event delegation so callers only need a small, obvious API:
//   bindEvents()            - wire up clicks once
//   selectProject(id)       - switch to a project and re-render everything
//   renderAll()             - re-paint sidebar + current task list
//   getCurrentProjectId()   - single source of truth for "what's selected"
export class Render {
  constructor(projectDiv, taskDiv, cardTemplate) {
    this.projectDiv = projectDiv;
    this.taskDiv = taskDiv;
    this.cardTemplate = cardTemplate;
    this.currentProjectId = undefined;
    this.bound = false;
  }

  // Attach the delegated click listeners exactly once.
  bindEvents() {
    if (this.bound) return;
    this.bound = true;

    this.projectDiv.addEventListener("click", (e) => this.handleSidebarClick(e));
    this.taskDiv.addEventListener("click", (e) => this.handleCardClick(e));
  }

  // Re-paint the sidebar and the current project's task list.
  renderAll() {
    renderProjects(this.projectDiv, this.currentProjectId);

    const project = this.currentProjectId
      ? getProjectById(this.currentProjectId)
      : undefined;

    if (project) {
      this.renderTasks(project);
      this.updateTasksHeading(project.name);
    }
  }

  // Switch to a project (by id): update state, sidebar highlight, tasks, heading.
  selectProject(id) {
    const project = getProjectById(id);
    if (!project) return;

    this.currentProjectId = project.id;
    renderProjects(this.projectDiv, this.currentProjectId);
    this.renderTasks(project);
    this.updateTasksHeading(project.name);
  }

  handleSidebarClick(event) {
    const btn = event.target.closest("button");
    if (!btn || !this.projectDiv.contains(btn)) return;

    this.selectProject(btn.dataset.id);
  }

  handleCardClick(event) {
    const btn = event.target.closest("button");
    if (!btn || !btn.dataset.taskId) return;

    if (btn.classList.contains("card-status")) {
      this.toggleTask(btn.dataset.taskId);
    } else if (btn.classList.contains("card-del")) {
      this.deleteTask(btn.dataset.taskId);
    }
  }

  toggleTask(taskId) {
    // task ids are formatted "projectId-taskId".
    const projectId = taskId.split("-")[0];
    const project = getProjectById(projectId);
    if (!project) return;

    const task = project.tasklist.find((t) => t.id == taskId);
    if (!task) return;

    task.completed = !task.completed;
    saveProject(project);
    this.selectProject(project.id);
  }

  deleteTask(taskId) {
    const projectId = taskId.split("-")[0];
    const project = getProjectById(projectId);
    if (!project) return;

    project.tasklist = project.tasklist.filter((t) => t.id != taskId);
    saveProject(project);
    this.selectProject(project.id);
  }

  renderTasks(project) {
    renderCards({
      project: project,
      container: this.taskDiv,
      template: this.cardTemplate,
    });
  }

  updateTasksHeading(newHeading) {
    document.getElementById("tasksHeading").textContent = newHeading;
  }

  getCurrentProjectId() {
    return this.currentProjectId;
  }
}
