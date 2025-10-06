import DeleteIcon from "./images/icons8-delete.svg";

export function Task({ task, i, toggleTask, deleteTask }) {
  return (
    <div className="task">
      <div className="task-content">
        <span
          className="icon"
          onClick={() => toggleTask(i)}
          style={task.status ? { backgroundColor: "green" } : {}}>
          &#x2713;
        </span>
        <span
          className="text"
          style={task.status ? { textDecoration: "line-through" } : {}}>
          {task.content}
        </span>
      </div>
      <div className="task-date">{task.time}</div>
      <button
        className="btn--delete"
        onClick={(e) => {
          e.stopPropagation(); // prevent parent onClick
          deleteTask(i);
        }}>
        <img src={DeleteIcon} alt="Delete Icon"/>
      </button>
    </div>
  );
}
