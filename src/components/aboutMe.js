import '../styles/Styles.css';
import twitter from './img/twitter.png';
import linkedin from './img/linkedin.png';

function aboutMe() {
    return (
      <div className="aboutContainer">
        <div className='About'></div>
        <div className="About">
            <h4 className="spacing">About Me</h4>
            <p className="spacing">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <img src={twitter} className='pic' alt="linkedin img"/> &nbsp;&nbsp;
            <img src={linkedin} className='pic' alt="twitter img"/>
        </div>
        <div className='About'></div>
      </div>
    );
  }
  
  export default aboutMe;
  