import TaskColumn from "../components/TaskColumn";

function Board() {
    return (
      <div className="board">
        <div className="task-column tc-todo">
          <TaskColumn status="To do" title="To Do" />
        </div>
        <div className="task-column tc-doing">
          <TaskColumn status="Doing" title="Doing" />
        </div>
        <div className="task-column tc-done">
          <TaskColumn status="Done" title="Done" />
        </div>
      </div>
    );
}

export default Board;
