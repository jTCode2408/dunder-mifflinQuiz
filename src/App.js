import React from 'react';
import logo from './logo.svg';
import './App.css';
//API LINK:https://www.officeapi.dev/
import Quiz from './components/quiz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Who said that?(The Office version)
      </header>

      <Quiz/>
    </div>
  );
}

export default App;
