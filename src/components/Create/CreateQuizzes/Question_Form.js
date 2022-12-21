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
  IconButton,
  Switch,
  Button } from '@material-ui/core';
import { CropOriginal, 
  Subject,
  Radio, 
  CheckBox,
  ShortText,
  Close,
  FilterNone, 
  MoreVert,
  AddCircleOutline,
  OndemandVideo,
  TextFields} from "@material-ui/icons";
import { FcRightUp } from "react-icons/fc";
import { BsTrash } from "react-icons/bs";

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

function changeQuestion(text, i) {
  var newQuestion = [...questions];
  newQuestion[i].questionText = text;
  setQuestions(newQuestion);
  console.log(newQuestion);
}

function changeOptionValue(text, i, j) {
  var optionsQuestion = [...questions];
  optionsQuestion[i].options[j].optionText = text;
  setQuestions(optionsQuestion);
  console.log(optionsQuestion);
}

function addQuestionType(i, type) {
  let qs = [...questions];
  console.log(type)
  qs[i].questionType = type;
  setQuestions(qs);
}

function removeOption(i, j) {
  var RemoveOptionQuestion = [...questions];
  if (RemoveOptionQuestion[i].options.length > 1) {
    RemoveOptionQuestion[i].options.splice(j, i);
  setQuestions(RemoveOptionQuestion);
  console.log(i + "__" + j)
  }
}

const questionsUI = () => {
  return questions?.map((ques, i) => (
    <div className="main-div">
      <Accordion expanded={questions[i].open} className={questions[i].open ? 'add_border' : ''}>
        <AccordionSummary
        aria-controls='panel1a-content'
        id="panel1a-header"
        elevation={1} style={{'width': '100%'}}>
          { !questions[i].open ? (
            <div>
              <Typography style={{'fontSize': '15px', 'fontWeight': '400', 
              'letterSpacing': '.1px', 'paddingBottom': '8px'}}>
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
                value={ques.questionText}
                onChange={(e) => {changeQuestion(e.target.value, i)}}/>
              <CropOriginal style={{'color': '#5F6368'}} />
                <Select className="select" stlye={{'color': '#5F6368', 'fontSize': '13px'}}>
                  <MenuItem id="text" value="Text" onClick={() => {addQuestionType(i, "text")}}>
                    <Subject style={{'marginRight': '10px'}}/>Paragraph</MenuItem>
                  <MenuItem id="checkbox" value="Checkbox" onClick={() => {addQuestionType(i, "checkbox")}}>
                    <CheckBox style={{'marginRight': '10px', 'color': '#70757a'}}/> Checkbox</MenuItem>
                  <MenuItem id="radio" value="Radio" onClick={() => {addQuestionType(i, "radio")}}>
                    <Radio style={{'marginRight': '10px', 'color': '#70757a'}} checked/> Multiple Choice</MenuItem>
                </Select>
            </div>
            {ques.options.map((op, j) => (
              <div className="add_question_body" key={j}>
                {
                  (ques.questionType!=="text") ? 
                    <input type={ques.questionType} style={{'marginRight': '10px'}}/> :
                    <ShortText style={{'marginRight': '10px'}}/>
                }
                <div>
                  <input type="text" 
                  className="text_input" 
                  placeholder="option" 
                  value={ques.options[j].optionText}
                  onChange={(e) => {changeOptionValue(e.target.value, i, j)}}/>
                </div>
                <CropOriginal style={{'color': '#5f6368'}} />
                <IconButton aria-label="delete">
                    <Close onClick={() => {removeOption(i, j)}} />
                </IconButton>
              </div>
            ))}
            <div className="add_footer">
              <div className="add_question_bottom_left">
                <Button size="small" style={{'textTransform': 'none', 'color': '#4285f4', 
                'fontSize': '13px', 'fontWeight': '600'}}>
                  <FcRightUp style={{'border': '2 px solid #4285f4', 'padding': '2px', 'marginRight': '4px'}}/>
                Answer Key</Button>
              </div>

              <div className="add_question_bottom">

                <IconButton aria-label="copy">
                  <FilterNone />
                </IconButton>

                
                <IconButton aria-label="delete">
                  <BsTrash />
                </IconButton>
                  <span style={{'color': '#5f6368', 'fontSize': '13px'}}>Required</span>
                  <Switch name="checkedA" color="primary" checked></Switch>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </div>
            </div>
          </AccordionDetails>

          <div className="question_edit">
              <AddCircleOutline className="edit" />
              <OndemandVideo className="edit" />
              <CropOriginal className="edit" />
              <TextFields className="edit" />
          </div>
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
          </div>
        </div>
        {questionsUI()}
      </div>
    </div>
  )
}

export default Question_Form