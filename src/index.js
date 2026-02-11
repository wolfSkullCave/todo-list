// Style sheets
import "./styles.css";
import "./components/card.css";

// GUI components
import { Dom } from "./dom.js";
import { addTaskDOM } from "./gui/addTaskDOM.js";

// logic components
import { createProject } from "./project.js";

const dom = new Dom();
// dom.renderProjects();
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

dom.projectsList[0].addTask({
  name: "node js",
  desc: "Study node js",
  duDate: "15 March",
  priority: "low",
});

// dom.renderTasks();
dom.renderCard();

addTaskDOM();
