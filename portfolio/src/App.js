// import logo from './assets/images/logo.svg';
import './css/main.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Projects from './components/projects';
import WorkExperience from './components/work-experience';

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <WorkExperience />
    </div>
  );
}

export default App;
