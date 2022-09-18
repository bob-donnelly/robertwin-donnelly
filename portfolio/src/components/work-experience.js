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
                <img src={WorkplaceOne} alt="Two storey building with lights on and a lawn in front of it." />
            </div>

            <div className="project-card">
                <h2>Workplace Name Two</h2>
                <p>
                    This is a description of the workplace.
                </p>
                <img src={WorkplaceTwo} alt="Coworkers around a table collaborating." />
            </div>

            <div className="project-card">
                <h2>Workplace Name Three</h2>
                <p>
                    This is a description of the workplace.
                </p>
                <img src={WorkplaceThree} alt="Developers around a table programming." />
            </div>
        </div>
    )
}

export default WorkExperience