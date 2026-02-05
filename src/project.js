import { createTask } from "./task";

export function createProject(name) {
  return {
    name,
    tasks: [],

    addTask({ name, desc, duDate, priority }) {
      const newTask = createTask(name, desc, duDate, priority);
      this.tasks.push(newTask);
    },
  };
}
