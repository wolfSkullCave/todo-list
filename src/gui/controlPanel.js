import { rend } from "..";
import { renameProject } from "../renameProject";

function getCurrentProject() {
  const currentProject = document.getElementById("tasksHeading").textContent;

  if (currentProject === "Projects") {
    console.error("No project selected");
    return;
  }

  return currentProject;
}

export function controlPanel() {
  const renameProjectBtn = document.getElementById("renameProject");

  renameProjectBtn.addEventListener("click", () => {
    const input = document.getElementById("renameProjectInput").value;

    if (!input) {
      console.error("Input field is empty.");
      return;
    }

    // Verify that project exists
    if (localStorage.getItem(getCurrentProject())) {
      renameProject(getCurrentProject(), input);
      location.reload();
    }
  });
}
