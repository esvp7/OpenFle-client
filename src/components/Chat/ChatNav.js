import React, {useState} from 'react'

const ChatNav = ({ chat}) => {
  const [ currentUser ] = useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <div className='navbar'>
      <span className="logo">OpenFle Chat</span>
      <div className="user">
        <img src={currentUser.profilePicture} alt="" />
        <span>{currentUser.userName}</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default ChatNav;