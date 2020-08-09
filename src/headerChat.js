import React from "react";
import "./headerChat.css";
import arrowLeft from "./arrow-left.svg";
import point from "./lens.svg";
import imgUser from "./assets/avatar.jpg";

function HeaderChat() {
  return (
    <div className="container-header-chat">
      <div className="container-space"></div>
      <div className="container-info">
        <div className="container-user">
          <img className="arrow-left" src={arrowLeft} alt="" />
          <div className="container-img">
            <img src={imgUser} alt="" />
          </div>
          <div className="container-info-user">
            <p className="username">Samuel Green</p>
            <p className="available">Available to Walk</p>
          </div>
        </div>
        <div className="container-options">
          <img src={point} alt="" />
          <img src={point} alt="" />
          <img src={point} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeaderChat;
