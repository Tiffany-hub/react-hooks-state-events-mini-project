import React from "react";

function Task({ task }) {
  return (
    <div className="task">
      <p>{task.text}</p>
      <p>{task.category}</p>
      <button>Delete</button>
    </div>
  );
}

export default Task;
