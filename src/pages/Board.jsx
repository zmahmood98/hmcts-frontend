import { useState, useEffect } from "react";
import TaskColumn from "../components/TaskColumn";
import Loading from "../components/Loading";

function Board() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
