import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import Questions from './questions';


const Quiz=(props)=>{
    const [quotes, setQuotes]=useState();
    const [score, setScore] =useState(0);
    const [answer, setAnswer] =useState()
   
    const countAnswer=()=>{

    }

    return(
        <div>The office quotes quiz
             <Questions/>
             
        </div>


    )
    }


    export default Quiz;