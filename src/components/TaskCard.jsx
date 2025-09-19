function TaskCard({ task }) {
    return (
        <div className="task-card">
            <h4 className="task-card-title">{task.title}</h4>
            {task.description && <h5 className="task-card-desc">{task.description}</h5>}
        </div>
    );
}

export default TaskCard;
