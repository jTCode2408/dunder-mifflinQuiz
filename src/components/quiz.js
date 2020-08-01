import React from 'react';
import Quiz from 'react-quiz-component';
import {questions} from './questions';
import {QuizCont, ResultsCont, Results, MainCont} from './styles';
import mscott from '../assets/mscott.jpg';



const QuizMain=()=>{
    const renderCustomResultPage = (obj) => {   
        return (
          <>
          <ResultsCont>
          Uh oh, The Chili's is kicking us out! You're still a star! 
          </ResultsCont>
          <Results>
           You won {obj.correctPoints} Dundie's out of {obj.totalPoints}!
          </Results>

          </>
        )
      }
    return(
        <>
       
   <img src={mscott} alt="michael scott holding dundie"></img>
        <QuizCont>
       
              <Quiz quiz={questions} shuffle={true} showInstantFeedback={true} showDefaultResult={false}  customResultPage={renderCustomResultPage} />
                    
        </QuizCont>
  
        </>
    )
}

export default QuizMain;

