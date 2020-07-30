import React from 'react';
import Quiz from 'react-quiz-component';
import {questions} from './questions';
import {QuizCont, ResultsCont, Results} from './styles';
import mscott from '../assets/mscott.jpg';
import dundie from '../assets/dundie.jpg';

const QuizMain=()=>{
    const renderCustomResultPage = (obj) => {   
        return (
          <>
          <ResultsCont>
          Uh oh, The Chili's is kicking us out! You're still a star! 
          </ResultsCont>
          <Results>
            <img src ={mscott} alt="michael scott holding dundie"></img>
           You won {obj.correctPoints} Dundie's out of {obj.totalPoints}!
          </Results>

          </>
        )
      }
    return(
        <>

        <QuizCont>
          <img src={dundie} alt="dundie trophy"></img>
              <Quiz quiz={questions} shuffle={true} showInstantFeedback={true} showDefaultResult={false}  customResultPage={renderCustomResultPage} />
                    
        </QuizCont>
        </>
    )
}

export default QuizMain;

