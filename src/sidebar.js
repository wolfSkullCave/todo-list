export const sidebar = () => {
  const sidebarDiv = document.getElementById("sidebar");
  const projectListDiv = document.getElementById("projectsList");

  return {
    render(list = [{ title: "My First Project" }]) {
      for (const i of list) {
        const button = document.createElement("button");
        button.textContent = i.title;
        projectListDiv.appendChild(button);
      }
    },
  };
};
