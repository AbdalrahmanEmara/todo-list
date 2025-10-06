import { useState } from "react";
import { Task } from "./Task";

export function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [taskEdited, setTaskEdited] = useState(null);
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

  function showEditField(index) {
    document.querySelector(".edit--field").classList.toggle('hidden');
    document.querySelector('.overlay').classList.toggle('hidden');

    setTaskEdited(t => index);
  }

  function submitEdit (e, index) {
    e.preventDefault();
    if(!e.target[0].value) return;
    
    
    setTasks(tasks => tasks.map((t, i) => index === i ? {...t, content: e.target[0].value} : t));
    
    showEditField();
    e.target[0].value = "";
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
              deleteTask={deleteTask}
              showEditField={showEditField} />
          );
        })}
      </div>

      <form className="edit--field hidden" onSubmit={(e) => submitEdit(e, taskEdited)}>
        <p>Change task name</p>
        <input type="text" />
      </form> 
      <div className="overlay hidden">
        <button onClick={() => showEditField()}>X</button>
      </div>
    </>
  );
}
