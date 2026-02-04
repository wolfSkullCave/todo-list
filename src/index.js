import "./styles.css";
import { createProject } from "./project.js";
import { Dom } from "./dom.js";

const dom = new Dom();
dom.renderProjects();
dom.addProject("Study");
dom.addProject("Chores");
