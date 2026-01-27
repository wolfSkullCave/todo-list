export const taskbar = () => {
  const taskbarDiv = document.getElementById("tasks");

  return {
    render(project) {
      const h2 = document.getElementById("taskBarHeading");
      h2.textContent = project.title;
    },
    createInput(p) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = p.title;
      taskbarDiv.appendChild(taskbarDiv);
    },
    test(msg = "taskbar test") {
      const m = document.createElement("p");
      m.textContent = msg;
      taskbarDiv.appendChild(m);
    },
  };
};
