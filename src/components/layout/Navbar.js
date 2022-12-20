import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import decode from 'jwt-decode';

const Navbar = () => {
  const [active, setActive] = useState('');
  const location = useLocation();
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));

  const userToken = localStorage.getItem("token");
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);


  return (
    <>
    <div className="main-nav">
        <div className={active === 'lessons' ? 'cont active-cont' : 'cont'}
        onMouseOver={() => setActive('lessons')}>📚Lessons</div>
        <div className={active === 'tests' ? 'cont active-cont' : 'cont'}
        onMouseOver={() => setActive('tests')}>📝Flashcards</div>

        <Link to="/create">
        <div className={active === 'create' ? 'cont active-cont' : 'cont'} 
        onMouseOver={() => setActive('create')}>➕Create</div>
        </Link>

        <Link to="/connect">
        <div className={active === 'chat' ? 'cont active-cont' : 'cont'} 
        onMouseOver={() => setActive('chat')}>💬Connect</div>
        </Link>
        <div className={active === 'forums' ? 'cont active-cont' : 'cont'}
        onMouseOver={() => setActive('forums')}>👥Scenarios</div>

        {!userToken && (
        <Link to="/signup">
        <div className={active === 'auth' ? 'cont active-cont' : 'cont'} 
        onMouseOver={() => setActive('auth')}>➡️LogIn</div>
        </Link>
        )}

        {userToken && (
          <Link to="/signup">
        <div className={active === 'auth' ? 'cont active-cont' : 'cont'} 
        onMouseOver={() => setActive('auth')}
        onClick={() => {
          handleLogout()
        }}>⬅️LogOut</div>
        </Link>
        )}

    </div>
    </>
  )
}

export default Navbar