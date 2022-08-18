import '../styles/Styles.css'
import twitter from './img/twitter.png';
import linkedin from './img/linkedin.png';
import email from './img/email.png';

function Footer(){
    return(
        <div className='footerHead'>
            <div className='footer'>
                <h1>Mcdave Umoh</h1>
                <img className="pic" src={twitter} alt="react icon"/>&nbsp;&nbsp;&nbsp;&nbsp;
                <img className="pic" src={linkedin} alt="react icon"/>&nbsp;&nbsp;&nbsp;&nbsp;
                <img className="pic" src={email} alt="react icon"/><br/><br/>
                <p>Copyright 2022 | All rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;