import "./Titems.css";

function TodoItem({ text, completed, onToggleComplete, onDelete }) {
  return (
    <li className={`todo-item ${completed ? "completed" : ""}`}>
      <span
        className="todo-complete"
        onClick={onToggleComplete}
        style={{ cursor: "pointer" }}
      >
        {completed ? "✔" : "○"}
      </span>
      <p>{text}</p>
      <span
        className="todo-delete"
        onClick={onDelete}
        style={{ cursor: "pointer", marginLeft: "10px", color: "red" }}
      >
        ✗
      </span>
    </li>
  );
}

export { TodoItem };
