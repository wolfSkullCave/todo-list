// ============================================
// MAIN ENTRY POINT FOR THE TODO LIST APP
// ============================================

// Import stylesheets (these are bundled by webpack)
import "./css/reset.css";
// Base styles and layout
import "./css/base.css";
import "./css/layout.css";
// Header and footer
import "./css/header.css";
import "./css/footer.css";
// Component styles
import "./css/sidebar.css";
import "./css/forms.css";
import "./css/components.css";
// Page-specific styles
import "./css/card.css";
import "./css/popUpForm.css";

// Import the main DOM coordinator class
import { Dom } from "./gui/dom.js";
// Import form setup function
import { initTaskForm } from "./gui/taskForm.js";

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
  dueDate: "15 Feb",
  priority: "low",
});

dom.projectsList[0].addTask({
  name: "css",
  desc: "Study up on animations",
  dueDate: "15 March",
  priority: "low",
});

dom.projectsList[0].addTask({
  name: "node js",
  desc: "Study node js",
  dueDate: "15 March",
  priority: "low",
});

// Render the initial UI with all projects and the first project's tasks
dom.renderProjects();
