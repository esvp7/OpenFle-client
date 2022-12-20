import React from 'react';
import Chats from "./Chats";
import Pagination from './Pagination';
import { useChatValues } from './context/ChatContext';

const ChatSearch = ({
  setUsersPerPage,
  username,
  setUsername,
  filteredResults,
  allUsersFiltered,
  selectUser,
  err,
  user,
  user1,
  userChat,
  setUserChat,
  usersPerPage,
  totalUsers,
  paginate
}) => {
const { userFromProfiles } = useChatValues();

if (userFromProfiles !== null) {
  setUsersPerPage(1);
} else {
  setUsersPerPage(2);
}

const removeUserFromProfile = filteredResults?.filter((user) => 
!user?.userName?.toLowerCase().includes(userFromProfiles?.userName));

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          value={username}
          placeholder="Find a user"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {err && <span>User not found!</span>}
      {userFromProfiles !== null && (
        <>
        <p className="truncate">
          <strong style={{'color': '#8da4f1', 'marginLeft': '15px', 'marginBottom': '0px'}}>
            Click to Start Chatting with {userFromProfiles.userName}!</strong>
        </p>
        <Chats 
          user={userFromProfiles}
          selectUser={selectUser}
          user1={user1}
          userChat={userChat}/>
        </>
      )}
      {userFromProfiles !== null ? removeUserFromProfile?.map((user) => (
                <Chats 
                user={user}
                selectUser={selectUser}
                user1={user1}
                userChat={userChat}/>
      )) : filteredResults?.map((user) => (
        <Chats 
        user={user}
        selectUser={selectUser}
        user1={user1}
        userChat={userChat}/>
      ))}
        {username && allUsersFiltered.map((user) => (
                <Chats 
                user={user}
                selectUser={selectUser}
                user1={user1}
                userChat={userChat}/>
        ))}
          {totalUsers > usersPerPage &&
            <Pagination
             usersPerPage={usersPerPage}
             totalUsers={totalUsers}
             paginate={paginate}
            />
            }
    </div>
  )
}

export default ChatSearch