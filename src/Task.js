export class Task {
  constructor({ name, desc, dueDate, priority }) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
}
