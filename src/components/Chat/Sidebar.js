import React from "react";
import ChatNav from "./ChatNav"
import ChatSearch from "./ChatSearch"

const Sidebar = ({
  username,
  setUsername,
  secondUserInfo,
  setSecondUserInfo,
  currentUser,
  filteredResults,
  allUsersFiltered,
  selectUser,
  err,
  setUserChat,
  user1,
  userChat,
  user,
  usersPerPage,
  setUsersPerPage,
  totalUsers,
  paginate
}) => {
  return (
    <div className="sidebar">
      <ChatNav/>
      <ChatSearch
          setUsersPerPage={setUsersPerPage}
          selectUser={selectUser}
          user1={user1}
          userChat={userChat}
          username={username}
          setUsername={setUsername}
          secondUserInfo={secondUserInfo}
          setSecondUserInfo={setSecondUserInfo}
          currentUser={currentUser}
          filteredResults={filteredResults}
          allUsersFiltered={allUsersFiltered}
          err={err}
          setUserChat={setUserChat}
          user={user}
          usersPerPage={usersPerPage}
          totalUsers={totalUsers}
          paginate={paginate}/>
    </div>
  );
};

export default Sidebar;