import "./css/reset.css";
import "./css/base.css";
import "./css/layout.css";
import "./css/header.css";
import "./css/sidebar.css";
import "./css/card.css";
import "./css/components.css";
import "./css/forms.css";
import "./css/footer.css";
import "./css/popUpForm.css";
import { Project } from "./Project";
import { Task } from "./Task";
import { renderProjects } from "./gui/renderProjects";

// testing tasks class
const dishes = new Task({
  name: "dishes",
  desc: "wash dishes after supper",
  dueDate: "daily",
  priority: "low",
});
console.log(dishes);

// testing projects class
const chores = new Project({ name: "chores", tasklist: [dishes] });
console.log(chores);

const study = new Project({ name: "study" });

// testing renderProjects function
renderProjects([chores, study]);
