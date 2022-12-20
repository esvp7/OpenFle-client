import React, { useState /*, useEffect*/ } from 'react';
/*import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import CheckBoxlIcon from "@material-ui/icons/Checkbox";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import OnDemandVideoIcon from "@material-ui/icons/AddCircleOutline";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import CloseIcon from "@material-ui/icons/Close";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import Button  from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { BsTrash, BsFileText } from "react-icons/bs";
import { FcRightUp } from "react-icons/fc"*/
import "./Question_Form.css";

import { Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  FormControlLabel, 
  Typography,
  Select,
  MenuItem,
  IconButton } from '@material-ui/core';
import { CropOriginal, 
  Subject,
  Radio, 
  CheckBox,
  ShortText,
  Close } from "@material-ui/icons";

const Question_Form = () => {
  const [questions, setQuestions] = useState(
    [{questionText: "What is the Capital of Canada?" , 
  questionType: "radio",
options: [
  {optionText: "Toronto"},
  {optionText: "Ottawa"},
  {optionText: "Oshawa"},
  {optionText: "Montreal"},
],
open: true,
required: false}]
)

const questionsUI = () => {
  return questions?.map((ques, i) => (
    <div>
      <Accordion expanded={questions[i].open} className={questions[i].open ? 'add_border' : ''}>
        <AccordionSummary
        aria-controls='panel1a-content'
        id="panel1a-header"
        elevation={1} style={{'width': '100%'}}>
          { questions[i].open ? (
            <div>
              <Typography style={{'fontSize': '15px', 'fontWeight': '400', 
              'letterSpacing': '.1px', 'lineHeight': '25px', 'paddingBottom': '8px'}}>
                {i+1}. {questions[i].questionText}
              </Typography>

              {ques.options.map((op, j) => (
                <div key={j}>
                  <div style={{'display': 'flex'}}>
                    <FormControlLabel style={{'marginLeft': '5px', 'marginBottom': '5px'}}
                      disabled control={
                        <input type={ques.questionType} color="primary" 
                        style={{'marginRight': '3px'}} required={ques.type}/>} label={
                          <Typography style={{'fontSize': '12px',
                            'fontWeight': '400',
                            'letterSpacing': '.2px',
                            'lineHeight': '20px',
                            'color': '#202124'}}>
                              {ques.options[j].optionText}
                          </Typography>
                         } />
                   </div>
                </div>
              ))}
            </div>
          ): ""}
        </AccordionSummary>
        <div className="question_boxes">
          <AccordionDetails className="add_question">
            <div className="add_question_top">
              <input type="test"
                className="question"
                placeholder="Question"
                value={ques.questionText}/>
              <CropOriginal style={{'color': '#5F6368'}} />
                <Select className="select" stlye={{'color': '#5F6368', 'fontSize': '13px'}}>
                  <MenuItem id="text" value="Text"><Subject style={{'marginRight': '10px'}}/> Paragraph</MenuItem>
                  <MenuItem id="checkbox" value="Checkbox"><CheckBox style={{'marginRight': '10px', 'color': '#70757a'}}/> Checkbox</MenuItem>
                  <MenuItem id="radio" value="Radio"><Radio style={{'marginRight': '10px', 'color': '#70757a'}} checked/> Multiple Choice</MenuItem>
                </Select>
            </div>
            {ques.options.map((op, j) => (
              <div className="add_question_body" key={j}>
                {
                  (ques.questionType="text") ? 
                    <input type={ques.questionType} style={{'marginRight': '10px'}}/> :
                    <ShortText style={{'marginRight': '10px'}}/>
                }
                <div>
                  <input type="text" className="text_input" placeholder="option" value={ques.options[j].ooptionText}/>
                </div>
                <CropOriginal style={{'color': '#5f6368'}} />
                <IconButton aria-label="delete">
                    <Close />
                </IconButton>
              </div>
            ))}
          </AccordionDetails>
        </div>
      </Accordion>
    </div>
  ))
}
  return (
    <div className="question_form">
      <hr style={{'padding': '0', 'margin': '0'}}/>
      <div className="section">
        <div className="question_title_section">
          <div className="question_form_top">
            <input type="text" className="question_form_top_name" 
              style={{ 'color': 'black'}} placeholder="Untitled Quiz"/>
            <input type="text" className="question_form_top_desc" 
              style={{ 'color': 'black' }} placeholder="Quiz Description"/>

              {questionsUI()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question_Form