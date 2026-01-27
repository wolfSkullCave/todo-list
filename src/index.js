import "./styles.css";

console.log("Hello Webpack Template!");

const projectsArr = [];

import { task, project } from "./project.js";

const chores = project("Chores");
const study = project("Study");

projectsArr.push(chores);
projectsArr.push(study);

chores.addTask("clean dishes");
study.addTask("the odin project");

import { ButtonFactory, Sidebar } from "./sidebar.js";
const sidebar = new Sidebar({
  container: document.getElementById("projectsList"),
  buttonFactory: new ButtonFactory(),
});
sidebar.render();
