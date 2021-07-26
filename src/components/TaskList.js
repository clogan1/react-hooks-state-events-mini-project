import React from "react";
import Task from './Task'

function TaskList({tasks, setTaskArray}) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return (<Task text={task.text} category={task.category} key={index} setTaskArray={setTaskArray} tasks={tasks}/> )
      })}
    </div>
  );
}

export default TaskList;
