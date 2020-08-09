import React from "react";
import "./bubble-money.css";

function BubbleMoney(props) {
  return (
    <div>
      <div className="bubble-money">
        <div className="container-time">
          <div className="circle"></div>
          <p className="text-time">{props.text}</p>
        </div>
        <p className="price">{props.price}</p>
      </div>
    </div>
  );
}

export default BubbleMoney;
