import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Question from './answers';


const Questions=props=>{
    const [quotes, setQuotes]=useState([]);
    const [score, setScore] =useState(0);
    const [answer, setAnswer] =useState([])


    useEffect(()=>{
        axios
        .get('https://cors-anywhere.herokuapp.com/https://officeapi.dev/api/quotes/random')
        .then(res=>{
            
            setQuotes(res.data.data)
          
            console.log(res.data.data.character.firstname)
            setAnswer(res.data.data.character)  
        })
        .catch(err=>{

        })
    }, [])

    return(
        <div>Guess who said this for points!
            <div className="quote-cont">
        Quote: {quotes.content}
   
            </div>
            <div className="answers-cont">
            By: {answer.firstname}        
            </div> 
             </div>

        

    )
    }


    export default Questions;