import { BrowserRouter as Router, Routes, Route, Navigate, Link} from "react-router-dom";
import { ChatProvider } from './components/Chat/context/ChatContext';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Navbar from './components/layout/Navbar';
import Avatar from "./components/auth/Avatar";
import EditUser from "./components/auth/EditUser";
import Profiles from "./components/Profiles/Profiles";
import Chat from "./components/Chat/Chat";
import Create from "./components/Create/Create";
import CreateQuizzes from "./components/Create/CreateQuizzes/CreateQuizzes";
import FormHeader from "./components/Create/CreateQuizzes/FormHeader";
import CenteredTabs from "./components/Create/CreateQuizzes/Tabs";
import Question_form from "./components/Create/CreateQuizzes/Question_Form";
import messageImg from "./message.png";
import './App.css';
import './styles.scss';

function App() {

  const user = localStorage.getItem("token");
  const Main = () => {
    return (
      <div>
      <div className="heading-cont">
        <div className="align-flex">
      {user && (<Link to="/chats">
        <img src={messageImg} alt="dm-icon" className="dmIcon"/>
      </Link>)}
      <h1 className="main-heading">🥐OpenFle</h1>
      </div>
      {user && <Avatar />}
      </div>
      <Navbar />
      </div>
    );
  }
  return (
    <div className="App">
      <ChatProvider>
    <Router>
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
      {user && <Route path="/editprofile" exact element={[<Main />, <EditUser />]} />}
			<Route path="/signup" exact element={[<Main />, <Signup />]}/>
			<Route path="/login" exact element={[<Main />, <Login />]} />
      <Route path="/connect" exact element={[<Main />, <Profiles />]} />
      <Route path="/connect/search" exact element={[<Main />, <Profiles />]} />
      <Route path="/chats" exact element={[<Main />, <Chat />]} />
      <Route path="/chats" exact element={[<Main />, <Chat />]} />
      <Route path="/create" exact element={[<Main />, <Create />]} />
      <Route path="/createQuizzes" exact element={[<Main />, <CreateQuizzes />]} />
      <Route path="/form/:id" exact element={[<Main />, <FormHeader />, <CenteredTabs />, <Question_form />]} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
    </Router>
    </ChatProvider>
  </div>
  );
}

export default App;
