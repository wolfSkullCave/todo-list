import { ProjectManager } from "./projectManager.js";
import { CardRenderer } from "./cardRenderer.js";
import { UIManager } from "./uiManager.js";

/**
 * Dom class serves as the main coordinator/facade for the application.
 * It orchestrates the interaction between:
 * - ProjectManager: handles project data
 * - CardRenderer: handles rendering tasks
 * - UIManager: handles user interactions
 * 
 * This class maintains the public API and delegates work to specialized modules.
 */
export class Dom {
  /**
   * Initializes the Dom coordinator with its dependencies
   * @param {Array} projectsList - Initial list of projects (optional)
   */
  constructor(projectsList = []) {
    // Initialize specialized managers
    this.projectManager = new ProjectManager(projectsList);
    this.cardRenderer = new CardRenderer();
    
    // Pass callback to UIManager so it can notify us when projects are added
    this.uiManager = new UIManager(
      (projectName) => this.addProject(projectName)
    );

    // Track which project is currently being viewed
    this.currentProjectIndex = 0;
  }

  /**
   * Getter to expose projects list for backward compatibility
   * @returns {Array} The list of projects
   */
  get projectsList() {
    return this.projectManager.projectsList;
  }

  /**
   * Adds a new project and re-renders the UI
   * @param {string} newProjectName - Name of the new project
   */
  addProject(newProjectName) {
    this.projectManager.addProject(newProjectName);
    this.renderProjects();
  }

  /**
   * Renders all projects as buttons and displays the first project's tasks
   */
  renderProjects() {
    this.uiManager.renderProjectButtons(
      this.projectManager.projectsList,
      (index) => this.renderCard(index)
    );
    // Display the first project by default
    this.renderCard(0);
  }

  /**
   * Renders a project's tasks in card format
   * @param {number} index - The index of the project to display (default: 0)
   */
  renderCard(index = 0) {
    this.currentProjectIndex = index;
    const project = this.projectManager.getProjectByIndex(index);
    this.cardRenderer.renderCard(project.tasks, project.name);
  }

  /**
   * Renders a project's tasks in checkbox list format (alternative view)
   * @param {number} index - The index of the project to display (default: 0)
   */
  renderTasks(index = 0) {
    const project = this.projectManager.getProjectByIndex(index);
    this.cardRenderer.renderTasks(project.tasks, project.name);
  }

  /**
   * Logs all projects to the console for debugging
   */
  listProjects() {
    this.projectManager.listProjects();
  }

  /**
   * Logs all tasks for a specific project to the console for debugging
   * @param {number} index - The index of the project (default: 0)
   */
  listTasks(index = 0) {
    this.projectManager.listTasks(index);
  }
}
