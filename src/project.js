function task(title, description, dueDate, priority) {
  const completed = false;
  const notes = [];
  return {
    title,
    description,
    dueDate,
    priority,
    completed,
    notes,
    addNote(content) {
      this.notes.push(content);
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
  };
}

function project(title) {
  const tasks = [];
  return {
    tasks,
    title,
    addTask(task) {
      this.tasks.push(task);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  };
}

export { task, project };
