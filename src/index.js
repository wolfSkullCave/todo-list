import "./styles.css";
import './reset.css';
import { createTask, createProject } from "./project.js";

const projectsArr = [];
let currentProject = null;

renderProjects()
addProject('Study',projectsArr)
addProject('Chores',projectsArr)
renderProjects();
projectsArr[0].addTask('javascript', 'odin project', 'weekly')

const addTaskBtn = document.getElementById('addTaskBtn')
addTaskBtn.addEventListener('click',addTask2)

function addProject(projectName, projectArr){
  const newProject = createProject(projectName)
  projectArr.push(newProject)
}

function addTask2(){
  console.log(currentProject)
  const task = document.getElementById('addTaskInput')
  console.log(task.value)


  task.value = ''
}

function findIndex(arr, item){
  return arr.findIndex(i => i.name === item)
}

function renderProjects(){
  const container = document.getElementById('projectsList')

  container.innerHTML = ''
  projectsArr.forEach(p => {
    const btn = document.createElement('button')
    btn.textContent = p.name
    container.appendChild(btn)

    btn.addEventListener('click',()=>{
      currentProject = btn
      // console.log(p.tasks)
      const h2 = document.getElementById('taskBarHeading')
      h2.textContent = p.name
      renderTasks(p)
    })
  })
}

function renderTasks(project){
  const tasks = project.tasks
  // console.log(tasks)

  const container = document.getElementById('taskContent')
  container.innerHTML = ''

  tasks.forEach(t => {
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.id = `${project.name}#${t.title}`

    const label = document.createElement('label')
    label.textContent = t.title
    label.htmlFor = checkbox.id

    container.appendChild(checkbox)
    container.appendChild(label)

  })
}

