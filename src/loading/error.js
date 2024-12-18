import React from "react";
import "./loading.css";

function Error({ errorMessage }) {
  return (
    <div className="error">
      <p>Error al cargar la página: {errorMessage || "Intenta nuevamente más tarde."}</p>
    </div>
  );
}

export default Error;
