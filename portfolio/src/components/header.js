import '../css/main.css';
import SiteLogo from '../assets/images/site-logo-lightmode.svg';
import Moon from '../assets/images/nightmode-moon.svg';

const Navbar = () => {

    return (
        <nav className="navbar">

            <div className="navbar-logo">

                <img src={SiteLogo} alt="A woman next to an atomic symbol with flowers."></img>

            </div>

            <ul className="navbar-links">
            <li> Home</li>
                <li>
                        <span>
                            Projects
                        </span>
                </li>

                <li>
                        <span>
                            Work Experience
                        </span>
                </li>

                
                <li>
                        <span>
                            Contact
                        </span>
                </li>
            </ul>

            <div className="moon">
                <img src={Moon} alt="A white half moon."></img>
            </div>

        </nav>
    )
}

export default Navbar