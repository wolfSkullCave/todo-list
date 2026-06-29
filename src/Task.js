import { randomInt } from "./randomNum";

export class Task {
  constructor({ projectId, name, desc, dueDate, priority }) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;

    const taskId = randomInt();
    this.id = `${projectId}-${taskId}`;
  }
}
