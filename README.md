# 📝 Todo List Project

A simple yet extensible **Todo List application** built with JavaScript. This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum and demonstrates core skills in modular JavaScript, DOM manipulation, and Webpack bundling.  

---

## 🚀 Features
- Create, edit, and delete **todos** with properties:
  - Title  
  - Description  
  - Due date  
  - Priority  
  - Optional notes or checklist  
- Organize todos into **projects** (with a default project on first load).  
- View all projects and todos at a glance.  
- Expand a todo to see or edit its details.  
- Color‑coded priorities for quick scanning.  
- **Persistence with localStorage** — todos remain saved between sessions.  

---

## 🛠️ Technologies
- **JavaScript (ES6+)**  
- **Webpack** for bundling  
- **HTML/CSS** for UI  
- **date-fns** (optional) for date formatting  

---

## 📂 Project Structure
```
src/
  index.js        # main entry point
  modules/        # app logic (todo, project, storage)
  styles.css      # basic styling
public/
  index.html      # template
webpack.config.js
package.json
```

---

## ⚙️ Setup
1. Clone the repository:
   ```bash
   git clone git@github.com:USERNAME/todo-list.git
   cd todo-list
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```
4. Build for production:
   ```bash
   npm run build
   ```

---

## 🎯 Learning Goals
- Practice **factories vs. classes** for object creation.  
- Separate **application logic** from **DOM manipulation** using modules.  
- Implement **localStorage** for persistence.  
- Gain experience with **Webpack configuration** and npm libraries.  

---

## 📌 Future Improvements
- Add user authentication and cloud storage.  
- Implement drag‑and‑drop for todos.  
- Add recurring tasks and reminders.  
- Improve UI with a modern framework (React/Vue).  

---

## 🏆 Acknowledgments
This project is part of [The Odin Project’s JavaScript curriculum](https://www.theodinproject.com/lessons/node-path-javascript-todo-list).  


