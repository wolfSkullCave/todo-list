import "./styles.css";

console.log("Hello Webpack Template!");

// sidebar
import { sidebar } from "./sidebar";

sidebar().render();

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

sidebar().render(projectsArr);

projectsArr;
