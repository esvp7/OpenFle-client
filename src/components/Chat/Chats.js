import React, { useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { useChatValues } from './context/ChatContext';
import { db } from "../../firebase";

const Chats = ({ user1, user, selectUser, userChat }) => {
  const user2 = user?._id;
  const [data, setData] = useState("");
  const { userFromProfiles, setUserFromProfiles } = useChatValues();

  useEffect(() => {
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
      setData(doc.data());
    });
    return () => unsub();
  }, [user1, user2]);

const unselectUserFromProfile = () => {
  userFromProfiles && setUserFromProfiles(null);
}

  return (
    <>
      <div
        className={`user_wrapper ${userChat?.userName === user?.userName && "selected_user"}`}
        onClick={() => {
          selectUser(user)
          unselectUserFromProfile();
        }}>
        <div className="user_info">
          <div className="user_detail">
            <img src={user?.profilePicture} alt="avatar" className="avatar" />
            <h4 style={{'color': '#8da4f1'}}>{user?.userName}</h4>
            {data?.from !== user1 && data?.unread && (
              <small className="unread">New</small>
            )}
          </div>
        </div>
        {data && (
          <p className="truncate">
            <strong style={{'color': '#8da4f1'}}>{data.from === user1 ? "Me:" : null}</strong>
            {data.text}
          </p>
        )}
      </div>
      <div
        onClick={() => selectUser(user)}
        className={`sm_container ${userChat?.userName === user?.userName && "selected_user"}`}
      >
        <img
          src={user.profilePicture}
          alt="avatar"
          className="avatar sm_screen"
        />
      </div>
    </>
  );
};

export default Chats;