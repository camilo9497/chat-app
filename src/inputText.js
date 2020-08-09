import React from "react";
import arrowRight from "./arrow-right.svg";
import "./inputText.css";

function InputText() {
  return (
    <div className="container-input">
      <input type="text" placeholder="Type a message…" />
      <button type="submit">
        <img src={arrowRight} alt="Imagen de una flecha a la derecha" />
      </button>
    </div>
  );
}
export default InputText;
