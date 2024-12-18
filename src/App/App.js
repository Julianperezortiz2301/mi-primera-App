import "./App.css";
import React from "react";
import { TodoCounter } from "../Tcounter/todo-counter";
import { TodoSearch } from "../Tsearch/todo-search";
import { TodoList } from "../Tlist/todo-list";
import { TodoItem } from "../Titems/todo-item";
import { Todoboton } from "../Tboton/todo-boton";
import { useLocalStorage } from "./localStorage";
import Loading from "../loading/loading.js";
import Error from "../loading/error.js";

function App() {
  const [todos, saveTodos, error, loading] = useLocalStorage("TODOS", []);
  const [searchValue, setSearchValue] = React.useState("");

  const searchedTodos = todos.filter((todo) =>
    todo.Text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleComplete = (id) => {
    saveTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    saveTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = {
      id: todos.length + 1,
      Text: text,
      completed: false,
    };
    saveTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoCounter
        completed={todos.filter((todo) => todo.completed).length}
        total={todos.length}
      />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && <Error errorMessage="Hubo un problema al cargar los datos." />}
        {loading && <Loading />}
        {!loading && searchedTodos.length === 0 && (
          <p className="message">No hay tareas por mostrar...</p>
        )}
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
      <Todoboton addTodo={addTodo} />
    </>
  );
}

export default App;
