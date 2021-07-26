import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [taskArray, setTaskArray] = useState(TASKS)
  const [filterBy, setFilterBy] = useState('All')

  function newTask(taskObj){
    setTaskArray([...taskArray, taskObj])
  }

  //console.log(filterBy)

  const visibleTasks = taskArray.filter(
    (task) => filterBy === "All" || task.category === filterBy
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setFilterBy={setFilterBy} selectedCat = {filterBy}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={newTask}/>
      <TaskList tasks={visibleTasks} setTaskArray={setTaskArray}/>
    </div>
  );
}

export default App;
