import { useState } from "react";
import { Task } from "./Task";

export function TasksList() {
  const [tasks, setTasks] = useState([]);
  function handleNewTask(e) {
    e.preventDefault();
    if (!e.target[0].value) return;

    const newTask = {
      content: e.target[0].value,
      status: false,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    };
    setTasks([...tasks, newTask]);
    e.target.reset();
  }

  function toggleTask(index) {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, status: !t.status } : t))
    );
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => index !== i));
  }

  return (
    <>
      <form className="form" onSubmit={(e) => handleNewTask(e)}>
        <input type="text" />
        <button>Add</button>
      </form>

      <div className="task-list">
        {tasks.map((task, i) => {
          return (
            <Task
              key={i}
              task={task}
              i={i}
              toggleTask={toggleTask}
              deleteTask={deleteTask} />
          );
        })}
      </div>
    </>
  );
}
