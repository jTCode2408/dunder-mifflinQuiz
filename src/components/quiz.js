import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import Quiz from 'react-quiz-component';
import {questions} from './questions';

const QuizMain=()=>{
    const renderCustomResultPage = (obj) => {
        console.log("Results OBJ", obj);
        return (
          <div>
            This is a custom result page. You can use obj to render your custom result page
          </div>
        )
      }
    return(
        <div>
              <Quiz quiz={questions} shuffle={true} showInstantFeedback={true} showDefaultResult={false}  customResultPage={renderCustomResultPage} />
                    
        </div>
    )
}

export default QuizMain;

