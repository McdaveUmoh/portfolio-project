import '../styles/Styles.css'
import consult from './img/consult.png';
import training from './img/training.png';
import testing from './img/testing.png';
import database from './img/database.png';
import saas from './img/saas.png';
import customer from './img/web.png';
import web from './img/web2.png';
import responsive from './img/writing.png';
import cus from './img/people.png';

function Service (){
    return(
        <div className="service">
            <h3>Services I Render,</h3>
            <p>Here are a few service i deliver</p>
            <div className="serviceSet">
                <div className="frame">
                    <div className="">
                        <img className="servicePic" src={consult} alt="react icon"/>
                        <h5>IT Consulting</h5>
                        <p> Lorem ipsum dolor sit amet, conUt enim ad mint cupidatat non proident, sunt in culpa qui officia deselaborum."</p>
                    </div>
                    <br/>
                    <div className="">
                        <img className="servicePic" src={training} alt="react icon"/>
                        <h5>Training</h5>
                        <p> Lorem ipsum dolor sit amnsequat. pariatur. Excepteur sint occaecat cupidatat  mollit anim id est laborum."</p>
                    </div>
                    <br/>
                    <div className="">
                        <img className="servicePic" src={database} alt="react icon"/>
                        <h5>Database Development</h5>
                        <p> Lorem ipsum dolor sit amet,  eu fugiat nulla pariatur. Excepteur sint oca deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
                <div className='frame'>
                    <div >
                        <img className="servicePic" src={saas} alt="react icon"/>
                        <h5>Saas Development</h5>
                        <p> Lorem ipsum dolor sit amet, consectetutate velit esse cupidatat non proident, sunt in culpa  anim id est laborum."</p>
                    </div>
                    <br/>
                    <div className="">
                        <img className="servicePic" src={cus} alt="react icon"/>
                        <h5>Customer Software</h5>
                        <p> Lorem ipsum dolor sit amet, ariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offd est laborum."</p>
                    </div>
                    <br/>
                    <div className="">
                        <img className="servicePic" src={responsive} alt="react icon"/>
                        <h5>Technical writing</h5>
                        <p> Lorem ipsum dolor sit amet, conulla pariatur. Excepteur sint occaecat cupidatat non proidserunt mollit anim id est laborum."</p>
                    </div>
                </div>
                <div className='frame'>
                    <div className="">
                        <img className="servicePic" src={web} alt="react icon"/>
                        <h5>Responsive Web Design</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur adipi cillum dolore eu fugiat nulla nt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <br/>
                    <div className="">
                        <img className="servicePic" src={testing} alt="react icon"/>
                        <h5>Software Testing</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo deiusm odeiusmodeiusmod tempor "</p>
                    </div>
                    <br/>
                    <div className="">
                        <img className="servicePic" src={customer} alt="react icon"/>
                        <h5>Web Development</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ."</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Service;