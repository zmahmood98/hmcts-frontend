import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

function TaskColumn({ status, title }) {
    
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        getTasksByStatus();
    }, [status]);
    
    const getTasksByStatus = async () => {
        try {
            const res = await fetch(
                `http://localhost:5025/api/Tasks/status/${status}`
            );
            if (!res.ok) throw new Error("Bad Response");
            const data = await res.json();
            setTasks(data || []); // default to empty array if no tasks
            } catch (err) {
            console.error(err);
            setTasks([]); // fallback
        }
    }

    function classnameFunc() {
        let t = title.replace(/\s/g, "");
        return "task-column-title-" + t
    }

    console.log(classnameFunc());

    if(tasks) {
        return (
          <>
            <h2 className="task-column-title">
              <span className={classnameFunc()}>⬤</span> {title}
            </h2>
            {tasks.length === 0 ? (
              <p className="task-column-nth">No tasks here</p>
            ) : (
              tasks.map((task) => <TaskCard key={task.id} task={task} />)
            )}
          </>
        );
    }
}

export default TaskColumn;
