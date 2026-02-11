export function createTask(name, desc, duDate, priority) {
  return {
    name,
    desc,
    duDate,
    priority,
    completed: false,

    toggleCheck() {
      this.checked = !this.checked;
    },
  };
}
