export class Project {
  constructor({ name, tasklist = [] }) {
    this.name = name;
    this.tasklist = tasklist;
  }

  addTask(task) {
    this.tasklist.push(task);
  }
}
