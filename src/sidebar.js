export const sidebar = () => {
  const sidebarDiv = document.getElementById("sidebar");
  const projectListDiv = document.getElementById("projectsList");

  return {
    add(projectTitle) {
      const project = document.createElement("button");
      project.textContent = projectTitle;
      project.setAttribute("data-title", projectTitle);
      projectListDiv.appendChild(project);
    },
    render(list = ["My First Project"]) {
      for (const i of list) {
        console.log(`${i.title}`);
        const button = document.createElement("button");
        button.textContent = i.title;
        projectListDiv.appendChild(button);
      }
    },
  };
};
