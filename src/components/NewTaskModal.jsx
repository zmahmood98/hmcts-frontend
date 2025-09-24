import { useState } from "react";

function NewTaskModal({ onClose }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("To do");
    const [dueDate, setDueDate] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        let body;

        if (description == "") {
            body = {
                "title": title,
                "status": status,
                "dueDate": dueDate,
            };
        } else {
            body = {
                "title": title,
                "description": description,
                "status": status,
                "dueDate": dueDate,
            };
        }

        try {
            const res = await fetch("http://localhost:5025/api/Tasks", {
                method: "POST",
                headers: {
                    accept: "text/plain",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.message || "Failed to create task");
            }

            onClose();
            window.location.reload();
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };

    return (
        <div className="modal-background">
            <div className="modal">
            <button onClick={onClose} className="modal-close-button">
                &times;
            </button>

            <h2 className="modal-title">New Task</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>

                <input
                    type="datetime-local"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />

                <button type="submit" className="modal-submit-button">
                    Create Task
                </button>
            </form>
            </div>
        </div>
    );
}

export default NewTaskModal;
