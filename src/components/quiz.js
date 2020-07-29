import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import Quiz from 'react-quiz-component';
import {questions} from './questions';
import Results from './results';

const QuizMain=()=>{
    const lowMessage="";
    const midMessage="";
    const highMessage="Wow, you must watch this show all the time. How many Dunder Mifflin shorts you own?";

    const renderCustomResultPage = (obj) => {
        console.log("Results OBJ", obj);
        return (
          <div className="results">
          "Uh oh, The Chili's is kicking us out. You got {obj.correctPoints} Dundee's out of {obj.totalPoints}! .
          </div>
        )
      }
    return(
        <>
        <div className="quiz-cont">
              <Quiz quiz={questions} shuffle={true} showInstantFeedback={true} showDefaultResult={false}  customResultPage={renderCustomResultPage} />
                    
        </div>
        </>
    )
}

export default QuizMain;

