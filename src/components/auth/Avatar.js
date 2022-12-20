import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Avatar = () => {
  const [ user ] = useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <div>
      <Link to="/editprofile">
      <div className="avatar-cont">
        <img className="profile-pic" src={user?.profilePicture} alt="userProfile" />
        <h6 className="username">{user?.userName}</h6>
      </div>
      </Link>
    </div>
  )
}

export default Avatar