import profilePic from './img/pic.jpg';
import '../styles/Styles.css'
import linkedin from './img/linkedin.png'
import twitter from './img/twitter.png'

function slide() {
    return (
      <div className="Container">
        <div className="intro">
            <p className="spacing">Hi there</p>
            <h4 className="spacing">I AM MCDAVE CHARLES UMOH</h4>
            <h2 className="spacing">A Top-notch Developer, Soldier and Designer</h2>
            <img src={linkedin} className='pic1' alt="linkedin img"/> 
            <img src={twitter} className='pic1' alt="twitter img"/>
        </div>
        <div className="">
            <img className="picture" src={profilePic} alt="profile img"/>
        </div>
      </div>
    );
  }
  
  export default slide;
  