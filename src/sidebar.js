export class Sidebar {
  // constructor(projectsArr) {
  //   this.projects = projectsArr;
  //   this.sidebarDiv = document.getElementById("sidebar");
  //   this.projectsArrDiv = document.getElementById("projectsList");
  // }
  // addBtn(title) {
  //   const btn = document.createElement("button");
  //   btn.textContent = title;
  //   btn.id = title;
  //   return btn;
  // }
  // render() {
  //   this.projects.forEach((ele) => {
  //     const btn = this.addBtn(ele.title);
  //     this.sidebarDiv.appendChild(btn);
  //   });
  // }
  constructor({ container, buttonFactory, projects }) {
    this.container = container;
    this.buttonFactory = buttonFactory;
    this.projects = projects;
  }

  render() {
    this.projects.array.forEach((element) => {
      this.buttonFactory.create(element.title);
    });
  }
}

export class ButtonFactory {
  constructor(title) {
    this.title = title;
    this.id = title;
  }

  create() {
    const btn = document.createElement("button");
    btn.textContent = this.title;
    btn.id = this.title;
    return btn;
  }
}
