import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';

const Quiz=(props)=>{
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
        <div>Guess who said this for points! </div>

        

    )
    }


    export default Quiz;