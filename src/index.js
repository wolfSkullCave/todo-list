import "./styles.css";
import { createProject } from "./project.js";
import { Dom } from "./dom.js";

const dom = new Dom();
dom.renderProjects();
dom.addProject("Study");
dom.addProject("Chores");
dom.projectsList[0].addTask({
  name: "javascript",
  desc: "factory functions",
  duDate: "15 Feb",
  priority: "low",
});
dom.projectsList[0].addTask({
  name: "css",
  desc: "Study up on animations",
  duDate: "15 March",
  priority: "low",
});
dom.renderTasks();
