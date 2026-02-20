export class TaskFormManager {
  constructor() {
    this.addTaskBtn = document.getElementById("addTaskBtn");
    this.init();
  }

  init() {
    this.addTaskBtn.addEventListener("click", () => {
      const newTask = this.getData();
      console.log(newTask);
    });
  }

  getData() {
    const taskName = document.getElementById("taskName");
    const taskDesc = document.getElementById("taskDesc");
    const taskPriority = document.getElementById("taskPriority");
    const taskDueDate = document.getElementById("taskDueDate");

    return {
      name: taskName.value,
      desc: taskDesc.value,
      priority: taskPriority.value,
      completed: false,
      dueDate: taskDueDate.value,
    };
  }
}

// Initialize the task form manager
document.addEventListener("DOMContentLoaded", () => {
  new TaskFormManager();
});
