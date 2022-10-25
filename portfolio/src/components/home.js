import '../css/main.css';
import Dev from '../assets/images/dev.svg';

const Home = () => {
    return (
        <div className="home-page">
            <p className="intro">
                My name is bob and I am a student studying Information Technology.
            </p>
            <img src={Dev} alt="A cartoon man sitting at a desk with coffee programming."></img>
            <p className="outro">
                I am interested in Information Technology as a whole! I do have preferences in technologies but
                I do not say no to working with any others.
            </p>
            <p className="statement">
                I am proud of my technical writing.
            </p>
        </div>
    )
}

export default Home