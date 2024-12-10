
import React from "react";
function useLocalStorage(itemNAME,initialValue){

    const localStorageTodos = localStorage.getItem("TODOS");
    let parsedTodos;
    if (!localStorageTodos) {
      localStorage.setItem(itemNAME, JSON.stringify(initialValue));
      parsedTodos = initialValue;
    } else {
      parsedTodos = JSON.parse(localStorageTodos);
    }
    const [item, setItem] = React.useState(parsedTodos);
    const saveItem = (newItem) => {
      localStorage.setItem(itemNAME, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveItem];
  
  
  }

  export { useLocalStorage };