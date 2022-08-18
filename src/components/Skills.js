import '../styles/Styles.css';
import reactpic from './img/react.png'
import wordpress from './img/wordpress.png'
import js from './img/js.png';
import ps from './img/ps.png';
import html from './img/html.png';
import python from './img/python.png';

function Skills(){
    return (
        <div className="skill">
            <h3>My Skills</h3>
            <p>Here are a few skills i possess</p><br/>
            <div className="skillSet">
                <div>
                    <div className="item">
                        <img className="pic1" src={reactpic} alt="react icon"/>
                        &nbsp;<label for="file">React</label><br/>
                        &nbsp;<progress  id="file" value="78" max="100"> 78% </progress>
                    </div>
                    <div className="item">
                        <img className="pic1" src={wordpress} alt="wordpress icon"/> 
                        &nbsp;<label for="file">WordPress</label><br/>
                        &nbsp;&nbsp;<progress id="file" value="95" max="100"> 95% </progress>  
                    </div>
                    <div className="item">
                        <img className="pic1" src={js} alt="javascript icon"/>
                        &nbsp;<label for="file">Javascript</label><br/>
                        &nbsp;&nbsp;<progress id="file" value="82" max="100"> 82% </progress>  
                    </div>
                </div>
                <div>
                    <div className="item">
                        <img className="pic1" src={ps} alt="photoshop icon"/> 
                        &nbsp;<label for="file">PhotoShop</label><br/>
                        &nbsp;&nbsp;<progress id="file" value="95" max="100"> 95% </progress>  
                    </div>
                    <div className="item">
                        <img className="pic1" src={python} alt="python icon"/> 
                        &nbsp;<label for="file">Python</label><br/>
                        &nbsp;&nbsp;<progress id="file" value="65" max="100"> 65% </progress>  
                    </div>
                    <div className="item">
                        <img className="pic1" src={html} alt="html icon"/> 
                        &nbsp;<label for="file">HTML</label><br/>
                        &nbsp;&nbsp;<progress id="file" value="90" max="100"> 90% </progress>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;