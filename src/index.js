// ============================================
// MAIN ENTRY POINT FOR THE TODO LIST APP
// ============================================

// Import stylesheets (these are bundled by webpack)
import "./css/styles.css";
import "./css/card.css";

// Import the main DOM coordinator class
import { Dom } from "./dom.js";
// Import form setup function
import { addTaskDOM } from "./addTaskDOM.js";

// ============================================
// INITIALIZE THE APPLICATION
// ============================================

// Create the main Dom instance (coordinates the entire app)
const dom = new Dom();

// Add some sample projects for demonstration
dom.addProject("Study");
dom.addProject("Chores");

// Add sample tasks to the first project (Study)
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

// Render the initial UI with all projects and the first project's tasks
dom.renderProjects();

// Initialize the form popup functionality
addTaskDOM();
