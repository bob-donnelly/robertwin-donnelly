// import logo from './assets/images/logo.svg';
import './css/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Projects from './components/projects';
import WorkExperience from './components/work-experience';
import Contact from './components/contact';
import Navbar from './components/header';

function App() {
  return (

      <Router>
      <Navbar />
      <main> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={ <Projects /> } />
        <Route exact path="/work-experience" element={ <WorkExperience /> } />
        <Route exact path="/contact" element={ <Contact /> } />
        </Routes>
    </main>
    </Router>
  );
}

export default App;
