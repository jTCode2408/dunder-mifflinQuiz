import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import {HomeCont, Intro, ButtonDiv, GoButton, IntroText, Title3} from './styles';

const Home=()=>{
    return(
        <HomeCont>
        <Intro>  
  
      
    

        </Intro>
        <ButtonDiv>
        <Link to="/quiz">

  <GoButton>
      Take The Quiz!
      </GoButton>
      </Link>  
      </ButtonDiv>
        </HomeCont>
    )
}


export default Home;


