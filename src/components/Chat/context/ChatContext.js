import React, { createContext, useContext, useState } from 'react';

export const ChatContext = createContext();
export const ChatProvider = ({ children }) => {
const [userFromProfiles, setUserFromProfiles] = useState(null);

  return (
    <ChatContext.Provider value={{ 
      userFromProfiles,
      setUserFromProfiles}}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatValues = () => useContext(ChatContext);