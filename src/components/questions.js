import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Question from './question';
import {QuestionContext} from '../contexts/questionContext';


const Questions=props=>{
    const [quotes, setQuotes]=useState();
    const [score, setScore] =useState(0);
    const [answer, setAnswer] =useState()


    useEffect(()=>{
        axios
        .get('https://cors-anywhere.herokuapp.com/https://officeapi.dev/api/quotes/')
        .then(res=>{
            
            setQuotes(res.data)
            console.log(res.data)
            
        })
        .catch(err=>{

        })
    }, [])

    const countAnswer=()=>{

    }

    return(
        <div>Guess who said this for points!
            <div>
            {quotes.map(quote => (
				<Questions
					key={quote.id}
					quote={quote.content}
					
				/>
			))}
            </div>
            
             </div>

        

    )
    }


    export default Questions;