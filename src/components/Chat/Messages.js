import React from 'react'
import Message from "./Message";

const Messages = ({ msgs, user1, currentUser, userChat }) => {

  return (
    <div className="messages">
    {msgs.length
      ? msgs.map((msg, i) => (
          <Message key={i} msg={msg} user1={user1} currentUser={currentUser} userChat={userChat}/>
        ))
      : null}
  </div>
  )
}

export default Messages