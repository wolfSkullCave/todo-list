import "./styles.css";
import { project } from "./project.js";
import { dom } from "./dom.js";

testProjects();
dom();

function testProjects() {
  const projects = [];
  const chores = project("Chores");
  chores.addTask("clean counter", "clean kitchen counter", "weekly", "normal");

  projects.push(chores);
  console.log("Test Projects: ");
  projects.forEach((p) => console.log(p.name));
  // chores.renderProjects();
  // chores.renderTasks();
}
