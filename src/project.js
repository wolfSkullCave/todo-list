function createTask(title, desc, duDate, priority = "normal") {
  return {
    title,
    desc,
    duDate,
    priority,
    completed: false,

    toggleComplete() {
      this.completed = !this.completed;
    },
  };
}

function createProject(name) {
  return {
    name,
    tasks: [],

    addTask(task) {
      this.tasks.push(createTask(task));
    },

    removeTask(taskTitle) {
      this.tasks = this.tasks.filter((t) => t.title !== taskTitle);
    },

    listTasks() {
      return this.tasks;
    },
  };
}

export { createTask, createProject };
