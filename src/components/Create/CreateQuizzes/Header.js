import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import { IconButton } from "@material-ui/core";
import TemporaryDrawer from './TemporaryDrawer';

const Header = () => {
  return (
    <div className="header">
        <div className="header_info">
            <TemporaryDrawer />
            <h1>🥐</h1>
        </div>
        <div className="header_search">
            <IconButton>
            <SearchIcon />
            </IconButton>
            <input type="text" name="search" placeholder='search...'/>
        </div>
        <div className="header_right">
            <IconButton>
            <AppsIcon /> 
            </IconButton>
        </div>
    </div>
  )
}

export default Header