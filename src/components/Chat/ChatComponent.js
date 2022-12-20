import React from 'react';
import Cam from "./img/cam.png";
import Add from "./img/add.png";
import More from "./img/more.png";
import Messages from "./Messages";
import Input from "./Input";

const ChatComponent = ({ 
  user1,
  userChat,
  currentUser,
  img,
  setImg,
  text,
  setText,
  handleSubmit,
  msgs,
  setMsgs,
 }) => {
  return (
    <div className="chat">
    <div className="chatInfo">
      {userChat &&
      <span style={{'marginLeft': '350px'}}>{userChat.userName}</span>
       }
      <div className="chatIcons">
        <img src={Cam} alt="" />
        <img src={Add} alt="" />
        <img src={More} alt="" />
      </div>
    </div>
    <>
      </>
    <Messages 
        msgs={msgs}
        setMsgs={setMsgs}
        user1={user1}
        currentUser={currentUser}
        userChat={userChat}/>
    <Input        
        img={img}
        setImg={setImg}
        text={text}
        setText={setText}
        handleSubmit={handleSubmit}/>
  </div>
  )
}

export default ChatComponent