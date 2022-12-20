import React from 'react';
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div>
        <Link to="/createQuizzes">
        <div>
            Create a Quiz
        </div>
        </Link>

        <div>
            Create a Flashcard Study Set 
        </div>
        <div>
            Propose a Scenario
        </div>

    </div>
  )
}

export default Create