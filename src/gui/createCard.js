export const createCard = ({ container, template, task }) => {
  // Clone the template content
  const card = template.content.cloneNode(true);

  // Populate template fields with task data
  card.querySelector(".card-title").textContent = task.name;
  card.querySelector(".card-description").textContent = task.desc;
  card.querySelector(".card-priority").textContent =
    "Priority: " + task.priority;
  card.querySelector(".card-dueDate").textContent = "Due Date: " + task.dueDate;

  let status = task.completed ? "Completed" : "Incomplete";
  card.querySelector(".card-status").textContent = status;

  if (card.querySelector(".card-status").textContent === "Incomplete") {
    card.querySelector(".card-status").classList.add("incomplete");
  } else {
    card.querySelector(".card-status").classList.add("completed");
  }

  card.querySelector(".card-del").setAttribute("data-task-id", task.id);
  card.querySelector(".card-status").setAttribute("data-task-id", task.id);

  // Add the card to the container
  container.appendChild(card);
};
