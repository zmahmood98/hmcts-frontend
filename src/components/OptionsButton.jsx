import { useState } from "react";

function OptionsButton({ onClose, id, currentStatus }) {
  const [status, setStatus] = useState(currentStatus);
  const [error, setError] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`http://localhost:5025/api/Tasks/${id}`, {
        method: "DELETE",
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to update task");

      onClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
      setError("Failed to update task");
    }
  };

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let body = `"${status}"`;
      console.log("body:", body)
      const res = await fetch(`http://localhost:5025/api/Tasks/${id}/status`, {
        method: "PUT",
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: body,
      });

      console.log(res);

      if (!res.ok) throw new Error("Failed to update task");

      onClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
      setError("Failed to update task");
    }
  };

  let optionsModalClassName = "options-modal";

  if (currentStatus == "Done") {
    optionsModalClassName = "options-modal-right-column"
  }

  return (
    <div className={`${optionsModalClassName}`}>
      <button onClick={onClose} className="options-close-button">
        &times;
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleUpdateStatus}>
        {currentStatus == "To do" && (
          <button
            name="Doing"
            value="Doing"
            type="submit"
            className="options-button"
            onClick={(e) => setStatus(e.target.value)}
          >
            Move task to Doing
          </button>
        )}
        {(currentStatus == "To do" || currentStatus == "Doing") && (
          <button
            name="Done"
            value="Done"
            type="submit"
            className="options-button"
            onClick={(e) => setStatus(e.target.value)}
          >
            Move task to Done
          </button>
        )}
      </form>
      <form onSubmit={handleDelete}>
        <button
          name="Delete"
          value="Delete"
          type="submit"
          className="options-button"
          onClick={(e) => console.log(e.target.value)}
        >
          Delete Task
        </button>
      </form>
    </div>
  );
}

export default OptionsButton;
