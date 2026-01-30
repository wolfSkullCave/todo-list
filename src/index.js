import "./styles.css";
import { project } from "./project.js";
import { dom, dom2 } from "./dom.js";

const projects = [];

const div = document.getElementById("projectsDiv");

testProjects();
dom2().renderProjects(div, projects);

function testProjects() {
  const chores = project("Chores");
  chores.addTask("clean counter", "clean kitchen counter", "weekly", "normal");

  projects.push(chores);
  // chores.renderProjects();
  // chores.renderTasks();
}
