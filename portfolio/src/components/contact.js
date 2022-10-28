import '../css/main.css';
import Resume from '../assets/images/Scrubbed-CV.JPG';

const Contact = () => {
    return(
        <>
        
        <div className="contact-page">
            <p> Contact me through the field below or through the email on my CV! </p>

            <img src={Resume} alt="A resume or curriculum vitae for the developer." />
        </div>
        
        <form className="form">
            <div className="name">
                <input type="text" placeholder="Your name" name="name" required />
            </div>

            <div className="email">
                <input type="email" placeholder="Email" name="email" required />
            </div>

            <div className="subject">
                <input type="text" placeholder="Your purpose" name="name" required />
            </div>

            <div className="title">
                <input type="text" placeholder="Your job title" name="name" required />
            </div>

            <div className="message">
                <textarea  minlength="20" id="message" cols="50" rows="20" placeholder="Your message" name="message" required />
            </div>

            <div className="send-message">
                <button type="submit"> Send a message </button>
            </div>
        </form>
            
            </>
    )
}

export default Contact