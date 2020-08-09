import React from "react";
import "./App.css";
import Phone from "./Phone";

function App() {
  return (
    <div className="container-principal">
      <div className="figure-violet"></div>
      <div className="figure-gray"></div>
      <div className="container-content">
        <Phone />
        <div className="container-content-text">
          <h1 className="title-paragraph">Simple booking</h1>
          <p className="paragraph">
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
