import { parseISO, format } from "date-fns";

function TaskCard({ task }) {
  function handleClick() {}

  function dateDisplay(isoDate) {
    const date = parseISO(isoDate);
    return format(date, "EEEE do MMM 'at' HH:mm");
  }

  return (
    <div className="task-card">
      <button onClick={handleClick} className="task-more-button">
        ...
      </button>
      <h4 className="task-card-title">{task.title}</h4>
      {task.description && (
        <h5 className="task-card-desc">{task.description}</h5>
      )}
      <h6 className="task-card-date">Due by: {dateDisplay(task.dueDate)}</h6>
    </div>
  );
}

export default TaskCard;
