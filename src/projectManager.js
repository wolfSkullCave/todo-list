import { createProject } from "./project.js";

/**
 * ProjectManager handles all project-related operations.
 * Responsible for managing the list of projects and providing
 * methods to add, retrieve, and list projects and their tasks.
 */
export class ProjectManager {
  constructor(projectsList = []) {
    this.projectsList = projectsList;
  }

  /**
   * Adds a new project to the projects list
   * @param {string} newProjectName - The name of the new project
   */
  addProject(newProjectName) {
    this.projectsList.push(createProject(newProjectName));
  }

  /**
   * Retrieves a project by its index
   * @param {number} index - The index of the project (default: 0)
   * @returns {Object} The project object at the given index
   */
  getProjectByIndex(index = 0) {
    return this.projectsList[index];
  }

  /**
   * Finds the index of a project by its name
   * @param {string} name - The name of the project
   * @param {Array} arr - The array to search in (default: this.projectsList)
   * @returns {number} The index of the project, or -1 if not found
   */
  getIndex(name, arr = this.projectsList) {
    return arr.findIndex((i) => i.name === name);
  }

  /**
   * Logs all projects to the console for debugging
   */
  listProjects() {
    console.log(this.projectsList);
  }

  /**
   * Logs all tasks for a specific project to the console
   * @param {number} index - The index of the project (default: 0)
   */
  listTasks(index = 0) {
    console.log(this.projectsList[index].tasks);
    console.log(index);
    console.log(this.projectsList[index]);
  }
}
