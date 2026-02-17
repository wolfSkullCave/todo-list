/**
 * Creates a new task object
 * A task represents a single item to be completed with details and status
 * 
 * @param {string} name - The name/title of the task
 * @param {string} desc - A description of the task
 * @param {string} duDate - The due date for the task
 * @param {string} priority - The priority level (low, medium, high)
 * @returns {Object} A task object with properties and methods
 */
export function createTask(name, desc, duDate, priority) {
  return {
    name,
    desc,
    duDate,
    priority,
    completed: false, // Tracks whether the task is completed

    /**
     * Toggles the completion status of this task
     */
    toggleCheck() {
      this.completed = !this.completed;
    },
  };
}
