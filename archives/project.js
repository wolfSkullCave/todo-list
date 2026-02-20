import { createTask } from "./task";

/**
 * Creates a new project object
 * A project is a container for tasks (e.g., "Study", "Chores", "Work")
 * 
 * @param {string} name - The name of the project
 * @returns {Object} A project object with methods to manage tasks
 */
export function createProject(name) {
  return {
    name,
    tasks: [],

    /**
     * Adds a new task to this project
     * @param {string} name - Task name
     * @param {string} desc - Task description
     * @param {string} dueDate - Due date for the task
     * @param {string} priority - Priority level (low, medium, high)
     */
    addTask({ name, desc, dueDate, priority }) {
      const newTask = createTask(name, desc, dueDate, priority);
      this.tasks.push(newTask);
    },
  };
}
