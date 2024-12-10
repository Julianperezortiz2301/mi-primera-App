import './Tsearch.css'

function TodoSearch({ searchValue, setSearchValue }) {
  // Manejar cambios en el input
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value); // Actualizamos el valor de búsqueda
  };

  return (
    <input
      className="tsearch-input"
      placeholder="Escribe aquí para buscar tareas"
      value={searchValue} // El valor del input es controlado por el estado
      onChange={handleSearchChange} // Actualizamos el estado con el texto ingresado
    />
  );
}

export { TodoSearch };
