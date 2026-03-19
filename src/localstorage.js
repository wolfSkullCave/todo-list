export function populateStorage(itemName, item) {
  // localStorage.setItem(item.name, JSON.stringify(item));
  saveProject(item);
}

export function retrieveStorage(item) {
  // if (localStorage.getItem(item)) {
  //   return JSON.parse(localStorage.getItem(item));
  // } else {
  //   console.error("Error:", item, "Does not exist in local storage.");
  // }
  return getProjects(item);
}

export function getAllLocalStorageItems() {
  // let items = [];
  // for (let i = 0; i < localStorage.length; i++) {
  //   let key = localStorage.key(i);
  //   let value = localStorage.getItem(key);

  //   try {
  //     value = JSON.parse(value);
  //   } catch (e) {
  //     console.error(e);
  //   }

  //   items.push({ key, value });
  // }
  // return items;

  return JSON.parse(localStorage.getItem("projects"));
}

export function saveProject(project) {
  let projectsArr = [];
  if (localStorage.length > 0) {
    projectsArr = JSON.parse(localStorage.getItem("projects"));
  }

  projectsArr.push(project);
  localStorage.setItem("projects", JSON.stringify(projectsArr));
}

export function getProjects(projectName) {
  let projects =
    JSON.parse(localStorage.getItem("projects")) ||
    console.error("Project not found");

  return projects.find((item) => item.name === projectName);
}

function checkIfProjectExists(project) {
  const projects = getAllLocalStorageItems();
  projects.foreach((p) => {
    if (p.id === project.id) {
      console.error("project already exists");
      return true;
    }
  });

  return false;
}

function editProject(project) {
  const projects = getAllLocalStorageItems();
  
}
