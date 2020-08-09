import React from "react";
import "./chat.css";
import img1 from "./assets/dog-image-1.jpg";
import img2 from "./assets/dog-image-2.jpg";
import img3 from "./assets/dog-image-3.jpg";
import BubbleMoney from "./bubble-money";
import InputText from "./inputText";

function Chat() {
  return (
    <div className="container-chat">
      <div className="bubble-chat">
        <p>That sounds great. I’d be happy with that</p>
      </div>
      <div className="bubble-chat">
        <p>Could you send over some pictures of your dog, please?</p>
      </div>
      <div className="container-images">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="container-bubble">
        <div className="bubble-chat-right">
          <p>Here are a few pictures. She’s a happy girl!</p>
        </div>
      </div>
      <div className="container-bubble">
        <div className="bubble-chat-right">
          <p>Can you make it?</p>
        </div>
      </div>
      <div className="bubble-chat">
        <p>
          She looks so happy! The time we discussed works. How long shall I take
          her out for?
        </p>
      </div>
      <BubbleMoney text={"30 minute walk"} price={"$29"} />
      <BubbleMoney text={"1 hour walk"} price={"$49"} />
      <InputText />
    </div>
  );
}

export default Chat;
