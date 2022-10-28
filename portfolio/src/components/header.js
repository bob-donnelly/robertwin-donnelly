import '../css/main.css';
import {Link} from 'react-router-dom';
import SiteLogo from '../assets/images/site-logo-lightmode.svg';
import Moon from '../assets/images/nightmode-moon.svg';

const Navbar = () => {

    return (
        <nav className="navbar">

            <div className="navbar-logo">

                <img src={SiteLogo} alt="A woman next to an atomic symbol with flowers."></img>

            </div>

            <div className="moon">
                <input type="image" 
                    img src={Moon} alt="A white half moon."
                />
            </div>

            <ul className="navbar-links">
                <li>
                    <Link to="/"> 
                        <span>
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        <span>
                                Projects
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="/work-experience">
                        <span>
                            Work Experience
                        </span>
                    </Link>
                </li>

                
                <li>
                    <Link to="/contact"> 
                        <span>
                            Contact
                        </span>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar