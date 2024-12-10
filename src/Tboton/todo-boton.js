import React from "react";
import './Tboton.css';


export function Todoboton({ addTodo }) {
    const [newTodoText, setNewTodoText] = React.useState(""); // Estado local para el texto de la nueva tarea
  
    const handleAddTodo = () => {
      if (newTodoText.trim() !== "") {
        addTodo(newTodoText); // Llama a la función que se pasa como prop
        setNewTodoText(""); // Limpia el input después de agregar
      }
    };
  
    return (
      <div className="add-todo-container">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)} // Actualiza el estado local
          className="add-todo-input"
        />
        <button onClick={handleAddTodo} className="add-todo-button">
          Agregar
        </button>
      </div>
    );
  }

export default Todoboton ;