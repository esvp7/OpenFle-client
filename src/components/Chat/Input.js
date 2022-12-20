import React from 'react';
import Img from "./img/img.png";
import Attach from "./img/attach.png";

const Input = ({
  setImg,
  text,
  setText,
  handleSubmit,
}) => {
  return (
    <form style={{'width': '64%', 'marginLeft': '21rem'}}onSubmit={handleSubmit}>
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          id="img"
          accept="image/*"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <button>Send</button>
      </div>
    </div>
    </form>
  )
}

export default Input