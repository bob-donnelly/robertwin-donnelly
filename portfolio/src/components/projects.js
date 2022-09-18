import '../css/main.css';

import ProjectOne from '../assets/images/project-one.svg';
import ProjectTwo from '../assets/images/project-two.svg';
import ProjectThree from '../assets/images/project-three.svg';

const Projects = () => {
    return (
        <div className="projects-page">
            <p>
                Here are some of my projects!
            </p>
            <div className="project-card">
                <h2>Project Name</h2>
                <p>
                    This is a description of the project.
                </p>
                <img src={ProjectOne} alt="Wireframes showing an application in the design phase." />
                <p>Link to source on Github</p>
            </div>

            <div className="project-card">
                <h2>Project Name Two</h2>
                <p>
                    This is a description of the project.
                </p>
                <img src={ProjectTwo} alt="Graphs showing statistics such as users, time used, and what the application is used for." />
                <p>Link to source on Github</p>
            </div>

            <div className="project-card">
                <h2>Project Name Three</h2>
                <p>
                    This is a description of the project.
                </p>
                <img src={ProjectThree} alt="Developer signing up and using microsoft official courses." />
                <p>Link to source on Github</p>
            </div>
        </div>
    )
}

export default Projects