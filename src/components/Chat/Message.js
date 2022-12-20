import React, {useRef, useEffect} from 'react';
import Moment from "react-moment";

const Message = ({ msg, user1, currentUser, userChat }) => {
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });

  }, [msg]);
  return (
    <div
      className={`message ${msg.from === user1 ? "owner" : ""}`}
      ref={scrollRef}
    >
      <div className="messageInfo">
        <img
          src={
            msg.from === user1
              ? currentUser?.profilePicture
              : userChat?.profilePicture
          }
          alt=""
        />
      </div>
      <div className="messageContent">
      {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
        <p>{msg.text}</p>
        <br />
        <small>
          <Moment fromNow>{msg.createdAt.toDate()}</Moment>
        </small>
      </div>
    </div>
  )
}

export default Message