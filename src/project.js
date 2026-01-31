import { task } from "./task";

export function project(name) {
  return {
    name,
    tasks: [],

    addTask(name, desc, duDate, priority) {
      const newTask = task(name, desc, duDate, priority);
      this.tasks.push(newTask);
    },
  };
}

