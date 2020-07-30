import React from 'react';
import {Header, AppStyle, Title, Title2} from './components/styles';
import {Route, Switch} from 'react-router-dom';
import QuizMain from './components/quiz';
import Home from './components/home';

function App() {
  return (
    <AppStyle>
     
      <Header>
        
   <Title> Who Said That ?</Title> 
    <Title2> (The Office Version) </Title2>
      </Header>
    
 
<Switch>
  
    <Route exact path="/" component={Home}></Route>
  <Route exact path ="/quiz" component={QuizMain}>

    </Route>
       
  </Switch>
 

    </AppStyle>
  );
}

export default App;
