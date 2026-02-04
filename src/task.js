export function createTask(name, desc, duDate, priority) {
  return {
    name,
    desc,
    duDate,
    priority,
    checked: false,

    toggleCheck() {
      this.checked = !this.checked;
    },
  };
}
