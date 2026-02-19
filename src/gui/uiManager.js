import { TaskFormManager } from "../taskManager.js";
import { initTaskForm } from "./taskForm.js";

/**
 * UIManager handles all DOM element references and user event handling.
 * Responsible for:
 * - Managing references to DOM elements
 * - Setting up event listeners
 * - Rendering project buttons
 */
export class UIManager {
  /**
   * Initializes UI manager and sets up event listeners
   * @param {Function} onProjectAdded - Callback function when a new project is added
   */
  constructor(onProjectAdded) {
    // Cache frequently accessed DOM elements
    this.projectsDiv = document.getElementById("projectsDiv");
    this.projectsUl = document.getElementById("projectsUl");

    this.newProjectsInput = document.getElementById("projectNameInput");
    this.newProjectBtn = document.getElementById("addProjectBtn");

    // Set up event listener for adding new projects
    this.newProjectBtn.addEventListener("click", () => {
      // Validate input is not empty
      if (!this.newProjectsInput.value.trim()) return;
      // Call the callback with the project name
      onProjectAdded(this.newProjectsInput.value);
      // Clear the input field
      this.newProjectsInput.value = "";
    });

    initTaskForm(); // enable the hidden popup form when the user clicks the 'Add Task' button
    this.taskManager = new TaskFormManager();
    
  }

  /**
   * Renders project buttons for the sidebar
   * @param {Array} projects - Array of project objects to render
   * @param {Function} onProjectClick - Callback function when a project button is clicked
   */
  renderProjectButtons(projects, onProjectClick) {
    // Clear previous buttons
    this.projectsDiv.innerHTML = "";

    // Create a button for each project
    projects.forEach((project, index) => {
      const button = document.createElement("button");
      button.textContent = project.name;
      button.id = index;

      // Add click handler to display the project's tasks
      button.addEventListener("click", () => {
        onProjectClick(index);
      });

      this.projectsDiv.appendChild(button);
    });
  }
}
