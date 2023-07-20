import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState([]);
  const handleTaskFormSubmit = (task) => {
  const newTask = { id: TASKS.length +1, ...task};
  setTasks([...TASKS, newTask]);
    console.log("Adding new task:", task);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={TASKS} />
    </div>
  );
}

export default App;
