import React from "react";
import "./phone.css";
import HeaderChat from "./headerChat";
import Chat from "./Chat";

function Phone() {
  return (
    <div className="container-content-phone">
      <HeaderChat />
      <Chat />
    </div>
  );
}

export default Phone;
