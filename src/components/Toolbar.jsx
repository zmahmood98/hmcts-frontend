import { useState } from "react";
import NewTaskModal from "./NewTaskModal";

function Toolbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="toolbar">
      <h1 className="toolbar-title">Task Manager</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="new-task-button"
      >
        New Task
      </button>

      {isModalOpen && <NewTaskModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default Toolbar;
