import React from 'react';
import ArrowDropdownIcon from "@material-ui/icons/ArrowDropDown";
import StorageIcon from "@material-ui/icons/Storage";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from '@material-ui/core';
import docImg from "./docImg.png";
import "./MainBody.css";

const MainBody = () => {
  return (
    <div className="mainbody">
        <div className="mainbody_top">
            <div className="mainbody_top_left" style={{'fontSize': '16px', 'fontWeight': '500'}}>
                Recent Quizzes
            </div>
            <div className="mainbody_top_right">
                <div className="mainbody_top_center"
                style={{'fontSize': '14px', 'marginRight': '125px'}}>
                    Owned by Anyone <ArrowDropdownIcon /></div>
                    <IconButton>
                    <StorageIcon style={{'fontSize': '16px', 'color': 'black'}}/>
                </IconButton>
                <IconButton>
                    <FolderOpenIcon style={{'fontSize': '16px', 'color': 'black'}}/>
                </IconButton>
            </div>
        </div>
        <div className="mainbody_docs">
            <div className="doc_card">
                <img src={docImg} alt="docs" className="doc_img" />
                <div className="doc_card_content">
                    <h5></h5>
                    <div className="doc_content" style={{ 'fontSize': '12px', 'color': 'grey'}}>
                        <div className="content_left">
                            <StorageIcon style={{ 'color': 'white', 'fontSize': '12px', 'backgroundcolor': '#6E2594',
                             'padding': '3px', 'marginRight': '3px', 'borderRadius': '2px'}}/>

                        </div>
                        <MoreVertIcon style={{ 'fontSize': '10px', 'color': 'grey'}}/> 

                    </div>

                </div>
            </div>
        </div>
    </div>

  )
}

export default MainBody