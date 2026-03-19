import { randomInt } from "./randomNum";

export class Project {
  constructor({ name, tasklist = [] }) {
    this.name = name;
    this.tasklist = tasklist;
    this.id = randomInt();
  }

  addTask(task) {
    this.tasklist.push(task);
  }

  getTasks() {
    for (let task of this.tasklist) {
      console.log(task);
    }
  }
}
