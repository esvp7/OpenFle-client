import React from 'react'
import { FiStar, FiSettings } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { Button, IconButton } from "@material-ui/core";
import { IoMdFolderOpen } from "react-icons/io";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./FormHeader.css"

const FormHeader = () => {
  return (
    <div className="form_header">
        <div className="form_header_left">
            <h2>🥐</h2>
            <input type="text" placeholder="Untitled Quiz" className="form_name" />
            <IoMdFolderOpen className="form_header_icon" style={{ 'marginRight': '10px'}}></IoMdFolderOpen>
            <FiStar className="form_header_icon" style={{ 'marginRight': '10px'}} />
            <span style={{'fontSize': '12px', 'fontWeight': '600'}}>All changes saved</span>
        </div>
        <div className="form_header_right">
            <IconButton>
                <ColorLensIcon size="small" className="form_header_icon" />
            </IconButton>
            <IconButton>
                <AiOutlineEye className="form_header_icon" />
            </IconButton>
            <IconButton>
                <FiSettings className="form_header_icon" />
            </IconButton>
            <Button variant="container" color="primary" href="#contained-buttons">Send</Button>
            <IconButton>
                <MoreVertIcon className="form_header_icon" />
            </IconButton>
        </div>
    </div>
  )
}

export default FormHeader