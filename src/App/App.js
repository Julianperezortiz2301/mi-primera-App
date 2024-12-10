import "./App.css";
import React from "react";
import { TodoCounter } from "../Tcounter/todo-counter";
import { TodoSearch } from "../Tsearch/todo-search";
import { TodoList } from "../Tlist/todo-list";
import { TodoItem } from "../Titems/todo-item";
import { Todoboton } from "../Tboton/todo-boton";
import { useLocalStorage } from "./localStorage";



// const [todos, setTodos] = React.useState([
//   { id: 1, Text: "Actividad1", completed: true },
//   { id: 2, Text: "Actividad2", completed: false },
//   { id: 3, Text: "Actividad3", completed: true },
//   { id: 4, Text: "Actividad4", completed: false },
// ]);

//   localStorage.removeItem("TODOS");
//   localStorage.setItem("TODOS", JSON.stringify(todos));// Guardar los datos en local storage













function App() {

 
    
    const [todos, saveTodos] = useLocalStorage("TODOS",[]);
    
    
    
 

  const [searchValue, setSearchValue] = React.useState(""); // Estado para manejar la búsqueda

  // Filtrar tareas según el valor de búsqueda
  const searchedTodos = todos.filter((todo) =>
    todo.Text.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Alternar estado de completado
  const toggleComplete = (id) => {
    saveTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Eliminar tarea
  const deleteTodo = (id) => {
    saveTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Agregar nueva tarea
  const addTodo = (text) => {
    if (text.trim() === "") return; // No permitir agregar tareas vacías
    const newTodo = {
      id: todos.length + 1, // Generar ID único
      Text: text,
      completed: false,
    };
    saveTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <>
      {/* Contador de tareas completadas y totales */}
      <TodoCounter
        completed={todos.filter((todo) => todo.completed).length}
        total={todos.length}
      />

      {/* Componente de búsqueda */}
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      {/* Componente de lista de tareas */}
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.Text}
            completed={todo.completed}
            onToggleComplete={() => toggleComplete(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>

      {/* Componente de agregar tarea */}
      <Todoboton addTodo={addTodo} />
    </>
  );
}
export default App;
