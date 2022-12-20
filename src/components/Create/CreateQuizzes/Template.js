import React from 'react';
import createBlank from "./createBlank.png";
import uuid from "react-uuid";
import { useNavigate } from 'react-router-dom';
import "./Template.css";

const Template = () => {

const navigate = useNavigate();
const createForm = () => {
    const id = uuid();
    console.log(id)
    navigate("/form/"+id)
}
  return (
    <div className="template_section">
        <div className="template_top">
            <div className="template_left">
                <span style={{'fontSize': '14px', 'color': '#202124'}}>
                    Start New Quiz</span>
            </div>
        </div>
        <div className="template_body">
            <div className="template_card" onClick={createForm}>
                <img src={createBlank} className="card_image" alt="Create Blank"/>
                <p className="card_title">Blank</p>
            </div>
        </div>
    </div>
  )
}

export default Template