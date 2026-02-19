/**
 * Creates a new task object
 * A task represents a single item to be completed with details and status
 * 
 * @param {string} name - The name/title of the task
 * @param {string} desc - A description of the task
 * @param {string} dueDate - The due date for the task
 * @param {string} priority - The priority level (low, medium, high)
 * @returns {Object} A task object with properties and methods
 */
export function createTask(name, desc, dueDate, priority) {
  return {
    name,
    desc,
    dueDate,
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
