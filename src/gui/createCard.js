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
  card.querySelector(".card-status").textContent = "Status: " + status;

  // Add the card to the container
  container.appendChild(card);
};
