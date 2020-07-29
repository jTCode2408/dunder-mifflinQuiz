import React from 'react';
import logo from './logo.svg';
import './App.css';
//API LINK:https://www.officeapi.dev/
import QuizMain from './components/quiz'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      Who said that?(The Office version)
      </header>

      <QuizMain/>
    </div>
  );
}

export default App;
