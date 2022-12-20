import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useChatValues } from '../Chat/context/ChatContext';
import { fetchUsers } from './userSlice';
import CountryFilter from './filters/CountryFilter';
import LevelFilter from './filters/LevelFilter';

const Profiles = () => {
  const user = useSelector(state => state.user);
  const [ currentUser ] = useState(JSON.parse(localStorage.getItem('profile')));
  const { setUserFromProfiles } = useChatValues();
  const [searchText, setSearchText] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const filteredResults = user.users.filter((user) =>
  user.userName.toLowerCase().includes(searchText));

  const seen = new Set();
  const filteredCategories = filteredResults?.filter(el => {
    const duplicate = seen.has(el.country);
    seen.add(el.country);
    return !duplicate;
  });

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  }
  const handleClick = (profile) => {
    setUserFromProfiles(profile);
  }
  const handleLevel = (e) => {
    setSelectedLevel(e.target.value);
  }

  const getFilteredList = () => {
    if (!selectedCountry && !selectedLevel) {
      return filteredResults
    } else {
      return filteredResults.filter((item) => item.country === selectedCountry && item.frenchLevel === selectedLevel);
    }
  }
  var filteredList = useMemo(getFilteredList, [selectedCountry, selectedLevel, filteredResults]);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      {user?.loading && <div>Loading...</div>}
      {!user?.loading && user?.error ? <div>Error: {user?.error}</div> : null}
      {!user?.loading && user?.users.length ? (
        <>
              <div className='searchInput'>
              <input
                value={searchText}
              	onChange={(event) =>
                  setSearchText(event.target.value)
                }
                type='text'
                placeholder='type to search...'
              />
          <CountryFilter handleChange={handleChange} filteredCategories={filteredCategories} />
          <LevelFilter handleChange={handleLevel} filteredCategories={filteredCategories} />
         </div>
        <ul className="card-cont">
          {filteredList?.map((profile) => (
            <div>
            {currentUser._id !== profile._id && (
            <div className="card">
            <div className={profile.instructorType === "BRONZE TIER" ? 'cover-photo cover-color-bronze'
            : profile.instructorType === "SILVER TIER" ? 'cover-photo cover-color-silver'
          : 'cover-photo cover-color-gold'}>
                <img src={profile.profilePicture} className="profile" alt={profile.userName}/>
            </div>
            <h3 className="profile-name">{`${profile.firstName} ${profile.lastName}`}</h3>
            <div className="user-info">
            <p className="about">{profile.description}</p>
            <p><span>Age:</span> {profile.age}</p>
            <p><span>Country:</span> {profile.country}</p>
            <p><span>Languages:</span> {profile.speakingLanguages}</p>
            <p><span>French Level:</span> {profile.frenchLevel}</p>
            </div>
            <div className="buttons-cont">
            <Link to="/chats">
            <button className="btn" onClick={()=>{handleClick(profile)}}>💬 Message</button>
            </Link>
            <a className="btn btn-filled" href={profile.frenchResources}>🔗 Favorite French Resource</a>
            </div>
        </div>
            )}
            </div>
          ))}
        </ul>
        </>
      ) : null}
    </div>
  )
}

export default Profiles;