export function testFunc() {
  import "./styles.css";

  console.log("Hello Webpack Template!");

  // sidebar
  import { Sidebar } from "./sidebar";

  // sidebar().render();

  // projects and tasks
  const projectsArr = [];

  import { task, project } from "./project.js";

  const chores = project("Chores");
  const study = project("Study");

  projectsArr.push(chores);
  projectsArr.push(study);

  chores.addTask("clean dishes");
  study.addTask("the odin project");

  console.log(projectsArr);
  // sidebar().render(projectsArr);
  const sidebar = new Sidebar(projectsArr);
  sidebar.render();

  // taskbar and event listener

  projectsArr.forEach((item) => {
    console.log(item.title, item.tasks);
    renderTaskbar(item);
  });

  function renderTaskbar(item) {
    const taskbar = document.getElementById("taskbar");

    const wrapper = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = item.title;

    wrapper.appendChild(checkbox);
    wrapper.append(item.title);
    taskbar.appendChild(wrapper);
  }
}
