import React from 'react';
import {Header, AppStyle, Title, Title2} from './components/styles';
import {Route, Switch} from 'react-router-dom';
import QuizMain from './components/quiz';
import Home from './components/home';
import './App.css';
function App() {
  return (
    <AppStyle>
     
      <Header>
        
   <Title> Who Said That ?</Title> 
    <Title2> (the office version) </Title2>
      </Header>
    

  
    <QuizMain/>
  
    </AppStyle>
  );
}

export default App;
