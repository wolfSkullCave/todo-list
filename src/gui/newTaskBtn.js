export const initNewTaskBtn = () => {
  document.getElementById("addTaskBtn").addEventListener("click", (e) => {
    // e.preventDefault();

    const taskName = document.getElementById("taskName").value;
    const taskDesc = document.getElementById("taskDesc").value;
    const taskPriority = document.getElementById("taskPriority").value;
    const taskDueDate = document.getElementById("taskDueDate").value;
    const taskProject = document.getElementById("taskProjects").value;

    // validate the form values
    const hasEmpty = [
      taskDesc,
      taskDueDate,
      taskName,
      taskPriority,
      taskProject,
    ].some((item) => item === null || item === "");

    if (hasEmpty) return console.error("Fill in all values");

    const newTask = new Task({
      name: taskName,
      desc: taskDesc,
      dueDate: taskDueDate,
      priority: taskPriority,
    });

    // add task to project

    try {
      const project = retrieveStorage(taskProject);
      project.tasklist.push(newTask);
      populateStorage(taskProject, project);
      rend.task(project);
    } catch (e) {
      console.error("Error:", e);
    } finally {
      const popup = document.getElementById("popupForm");
      popup.style.display = "none";
    }
  });
};

export function addTask() {
  const taskName = document.getElementById("taskName").value;
  const taskDesc = document.getElementById("taskDesc").value;
  const taskPriority = document.getElementById("taskPriority").value;
  const taskDueDate = document.getElementById("taskDueDate").value;
  const taskProject = document.getElementById("taskProjects").value;

  // validate the form values
  const hasEmpty = [
    taskDesc,
    taskDueDate,
    taskName,
    taskPriority,
    taskProject,
  ].some((item) => item === null || item === "");

  if (hasEmpty) return console.error("Fill in all values");

  const newTask = new Task({
    name: taskName,
    desc: taskDesc,
    dueDate: taskDueDate,
    priority: taskPriority,
  });

  // add task to project
  try {
    const project = retrieveStorage(taskProject);
    project.tasklist.push(newTask);
    populateStorage(taskProject, project);
    rend.task(project);
  } catch (e) {
    console.error("Error:", e);
  } finally {
    const popup = document.getElementById("popupForm");
    popup.style.display = "none";
  }
}
