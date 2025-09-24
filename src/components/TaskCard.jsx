import { parseISO, format } from "date-fns";
import OptionsButton from "./OptionsButton";
import { useState } from "react";

function TaskCard({ task }) {
  const [isOptionsButtonOpen, setIsOptionsButtonOpen] = useState(false);


  function dateDisplay(isoDate) {
    const date = parseISO(isoDate);
    return format(date, "EEEE do MMM 'at' HH:mm");
  }

  let date = new Date();
  let dueDate = parseISO(task.dueDate);
  let taskDeadlineClassname = "";

  if (dueDate < date) {
    taskDeadlineClassname = "task-card-date-overdue";
  }

  return (
    <div className="task-card">
      <div className="task-options-container">
        <button
          onClick={() => setIsOptionsButtonOpen(true)}
          className="task-options-button"
        >
          ...
        </button>
        {isOptionsButtonOpen && (
          <OptionsButton
            onClose={() => setIsOptionsButtonOpen(false)}
            id={task.id}
            currentStatus={task.status}
          />
        )}
      </div>
      <h4 className="task-card-title">{task.title}</h4>

      {task.description && (
        <h5 className="task-card-desc">{task.description}</h5>
      )}

      <h6 className="task-card-date">
        Due by: <span className={`${taskDeadlineClassname}`}>{dateDisplay(task.dueDate)}</span>
      </h6>
    </div>
  );
}

export default TaskCard;
