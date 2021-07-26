import React from "react";

function Task({text, category, setTaskArray, tasks}) {

  function removeTask(){
    let updatedTasks = tasks.filter(item => item.text !== text)
    setTaskArray(updatedTasks)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={removeTask}>X</button>
    </div>
  );
}

export default Task;
