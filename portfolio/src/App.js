import logo from './assets/images/logo.svg';
import './css/main.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Projects from './components/projects';
import WorkExperience from './components/work-experience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Home />
      <Projects />
      <WorkExperience />
    </div>
  );
}

export default App;
