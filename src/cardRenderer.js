/**
 * CardRenderer handles all task/card rendering to the DOM.
 * Responsible for displaying tasks in two formats:
 * - Card view: displays task details in card format using HTML template
 * - Task list view: displays tasks as checkboxes
 */
export class CardRenderer {
  /**
   * Renders tasks as cards using the HTML template
   * @param {Array} tasks - Array of task objects to render
   * @param {string} taskHeading - The heading text to display (usually project name)
   */
  renderCard(tasks, taskHeading) {
    const container = document.getElementById("card-container");
    const template = document.getElementById("card-template");

    // Clear previous content
    container.innerHTML = "";

    // Loop through each task and create a card from the template
    tasks.forEach((task) => {
      // Clone the template content
      const card = template.content.cloneNode(true);

      // Populate template fields with task data
      card.querySelector(".card-title").textContent = task.name;
      card.querySelector(".card-description").textContent = task.desc;
      card.querySelector(".card-priority").textContent = task.priority;
      card.querySelector(".card-duDate").textContent = task.duDate;
      card.querySelector(".card-status").textContent = task.completed;

      // Add the card to the container
      container.appendChild(card);
    });

    // Update the heading to show which project these tasks belong to
    this.updateHeading(taskHeading);
  }

  /**
   * Renders tasks as a checkbox list
   * @param {Array} tasks - Array of task objects to render
   * @param {string} taskHeading - The heading text to display
   */
  renderTasks(tasks, taskHeading) {
    const tasksDiv = document.getElementById("tasksDivContent");
    // Clear previous content
    tasksDiv.innerHTML = "";

    this.updateHeading(taskHeading);

    // If there are tasks, render them as checkboxes
    if (tasks.length > 0) {
      tasks.forEach((t) => {
        // Create a div to hold the checkbox and label
        const checkboxDiv = document.createElement("div");
        checkboxDiv.classList.add("checkboxDiv");

        // Create checkbox input
        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = t.name;

        // Create label for the task
        const label = document.createElement("label");
        label.id = t.name;
        label.textContent = t.name;

        // Assemble the elements
        checkboxDiv.appendChild(input);
        checkboxDiv.appendChild(label);
        tasksDiv.appendChild(checkboxDiv);
      });
    } else {
      // If no tasks, display a message
      const p = document.createElement("p");
      p.textContent = "No tasks available";
      tasksDiv.appendChild(p);
    }
  }

  /**
   * Updates the heading text (typically project name)
   * @param {string} headingText - The text to display as the heading
   */
  updateHeading(headingText) {
    const h2 = document.getElementById("tasksHeading");
    h2.textContent = headingText;
  }
}
