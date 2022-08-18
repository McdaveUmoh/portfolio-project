import '../styles/Styles.css'
import twitter from './img/twitter.png'
import linkedin from './img/linkedin.png'
import phone from './img/phone.png'
import email from './img/email.png'

function Contact(){
    return(
        <div className='contact'>
            <div className='contactInfo'>
                <h4>Get In Touch</h4>
                <p>"Lorem ipsum dolor sit amet, consectetur"</p><br/>
                <p className='alignImg'><img className="pic" src={linkedin} alt="linkedin icon"/><img className="pic1" src={twitter} alt="twitter icon"/>  - Mcdavri</p><br/>
                <p> <img className="pic1" src={email} alt="mail icon"/>&nbsp;&nbsp;Umohmcdave@gmail.com</p>
                <p> &nbsp;&nbsp;Send a Message any time!</p><br/>
                <p> <img className="pic1" src={phone} alt="phone icon"/>&nbsp;&nbsp;Umohmcdave@gmail.com</p>
                <p> &nbsp;&nbsp;Call any time!</p>
            </div>
            <div className='contactForm'>
                <h5>Need a Service?</h5>
                <h2>Send A Message</h2>
                <input type='text' name='name' classname='field' placeholder='Enter Full name'/><br/>
                <input type='text' name='email' classname='field' placeholder='Enter Email Address'/><br/>
                <input type='text' name='message' classname='field' placeholder='Write A Message'/><br/>
                <button>Send Message</button>
            </div>
        </div>
    );
}

export default Contact;