import React, {useEffect, useState} from 'react';
import { db, storage } from "../../firebase";
import {
  collection,
  addDoc,
  Timestamp,
  setDoc,
  getDoc,
  updateDoc,
  doc,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { fetchUsers } from '../Profiles/userSlice';
import ChatComponent from './ChatComponent';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux';

const Chat = () => {

  const [username, setUsername] = useState("");
  const user = useSelector(state => state.user);
  const [ currentUser ] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(2);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  let currentUsers = user?.users?.slice(indexOfFirstUser, indexOfLastUser);
  const filteredResults = currentUsers.filter((user) =>
  user?.userName?.toLowerCase().includes(username));
  const allUsersFiltered = user?.users?.filter((user) => 
  user?.userName?.toLowerCase().includes(username));
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const [err, setErr] = useState(false);
  const [userChat, setUserChat] = useState([]);
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [msgs, setMsgs] = useState([]);
  const user1 = currentUser._id;
  

const selectUser = async (user) => {
    setUserChat(user);
    const user2 = user._id;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    const msgsRef = collection(db, "messages", id, "chat");
    const q = query(msgsRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMsgs(msgs);
    });
    
    const docSnap = await getDoc(doc(db, "lastMsg", id));
    if (docSnap.data() && docSnap.data().from !== user1) {
      await updateDoc(doc(db, "lastMsg", id), { unread: false });
    }

    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user2;
    if (userChat !== "") {user2 = userChat._id} 

    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    let url;
    if (img) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${img.name}`
      );
      const snap = await uploadBytes(imgRef, img);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlUrl;
    }

    await addDoc(collection(db, "messages", id, "chat"), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
    });

    await setDoc(doc(db, "lastMsg", id), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      unread: true,
    });

    setText("");
    setImg("");
  };

  return (
    <div className='home'>
      <div className="container">
        <Sidebar 
        selectUser={selectUser}
        user1={user1}
        userChat={userChat}
        user={user}
          username={username}
          setUsername={setUsername}
          setUserChat={setUserChat}
          setUsersPerPage={setUsersPerPage}
          currentUser={currentUser}
          filteredResults={filteredResults}
          allUsersFiltered={allUsersFiltered}
          err={err}
          setErr={setErr}
          usersPerPage={usersPerPage}
          totalUsers={user.users.length}
          paginate={paginate}
          />
        <ChatComponent 
        user1={user1}
        userChat={userChat}
        currentUser={currentUser}
        img={img}
        setImg={setImg}
        text={text}
        setText={setText}
        handleSubmit={handleSubmit}
        msgs={msgs}
        setMsgs={setMsgs}
        />
      </div>
    </div>
  )
}

export default Chat