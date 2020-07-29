import React from 'react';
import Quiz from 'react-quiz-component';
import {questions} from './questions';

const QuizMain=()=>{
    const renderCustomResultPage = (obj) => {   
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

