import "./styles.css";

// console.log("Hello Webpack Template!");

// testing project.js
import { task, project } from "./project";

const projectList = [];

const chores = project("chores");
projectList.push(chores);

const laundry = task("Laundry", "Wash laundry", "Every Friday", "low");
chores.addTask(laundry);

// print all projects for testing
console.log("Projects:");
for (const item of projectList) {
  console.log(` - ${item.title}`);
  for (const entry of item.tasks) {
    console.log(`   - ${entry.title}`);
  }
}

// testing DOM
import { sidebar } from "./sidebar";
sidebar().add("Study");
sidebar().render(projectList);

// event listeners
const button = document.getElementById(projectList[0].title);
button.addEventListener("click", () => {
  console.log("hello world");
});
