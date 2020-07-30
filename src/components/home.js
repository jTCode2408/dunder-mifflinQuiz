import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import {HomeCont, Intro, ButtonDiv, GoButton, IntroText, Title3} from './styles';

const Home=()=>{
    return(
        <HomeCont>
        <Intro>  
  
      <Title3>How much of a 'Dunder-Mifflinite' are you? </Title3>
      <IntroText> Guess who said these quotes and see how many Dundee's you can win!</IntroText>  
<ButtonDiv>
        <Link to="/quiz">

  <GoButton>
      Take The Quiz!
      </GoButton>
      </Link>  
      </ButtonDiv>
        </Intro>
        </HomeCont>
    )
}


export default Home;


