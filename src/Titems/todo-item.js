import './Titems.css';







function TodoItem({ text, completed, onToggleComplete, onDelete }) {
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      {/* Chulo para marcar como completado */}
      <span
        className="todo-complete"
        onClick={onToggleComplete} // Llama a la función al hacer clic
        style={{ cursor: 'pointer' }} // Hace que el cursor sea interactivo
      >
        {completed ? '✔' : '○'} {/* Si está completado, muestra un chulo */}
      </span>

      {/* Texto del ítem */}
      <p>{text}</p>

      {/* Botón de eliminar */}
      <span
        className="todo-delete"
        onClick={onDelete} // Llama a la función al hacer clic
        style={{ cursor: 'pointer', marginLeft: '10px', color: 'red' }}
      >
        ✗
      </span>
    </li>
  );
}





export {TodoItem};