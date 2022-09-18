import '../css/main.css';

import WorkplaceOne from '../assets/images/workplace-one.svg';
import WorkplaceTwo from '../assets/images/workplace-two.svg';
import WorkplaceThree from '../assets/images/workplace-three.svg';

const WorkExperience = () => {
    return (
        <div className="work-page">
            <p>
                Here are some of my projects!
            </p>
            <div className="work-card">
                <h2>Workplace Name</h2>
                <p>
                    This is a description of the workplace.
                </p>
                <img src={WorkplaceOne} alt="Wireframes showing an application in the design phase." />
            </div>

            <div className="project-card">
                <h2>Workplace Name Two</h2>
                <p>
                    This is a description of the workplace.
                </p>
                <img src={WorkplaceTwo} alt="Graphs showing statistics such as users, time used, and what the application is used for." />
            </div>

            <div className="project-card">
                <h2>Workplace Name Three</h2>
                <p>
                    This is a description of the workplace.
                </p>
                <img src={WorkplaceThree} alt="Developer signing up and using microsoft official courses." />
            </div>
        </div>
    )
}

export default WorkExperience