import React from "react";
import "./Tboton.css";

export function Todoboton({ addTodo }) {
  const [newTodoText, setNewTodoText] = React.useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      addTodo(newTodoText);
      setNewTodoText("");
    }
  };

  return (
    <div className="add-todo-container">
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        className="add-todo-input"
      />
      <button onClick={handleAddTodo} className="add-todo-button">
        Agregar
      </button>
    </div>
  );
}

export default Todoboton;
