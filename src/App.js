import React from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import QuizMain from './components/quiz'
function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        
      Who said that?(The Office version)

      </header>
    
      <div className="intro">  
  
"How much of a 'Dunder-Mifflinite' are you? Take the quiz to guess who said these quotes and see how many Dundee's you can win!

</div>


 
<Switch>
  
    <Route path="/"></Route>
  <Route path ="/quiz">
    <QuizMain/>
    </Route>
    
    <Link to="/quiz">
  <button>
      Take The Quiz
      </button>
      </Link>  
   
  </Switch>
    

    </div>
  );
}

export default App;
