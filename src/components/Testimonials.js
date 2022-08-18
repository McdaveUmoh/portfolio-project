import '../styles/Styles.css'
import people from './img/people.png'

function Testimonials(){
    return(
        <div className='testimonials'>
            <div className='testBanner'><h4>Testimonials & Recommendations</h4></div>
            <div className='peopleTest'>
                <div>
                    <div>
                        <img className="pic" src={people} alt="react icon"/>
                        <h4>Edwin Aluya</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur"</p>
                    </div>
                    <div>
                        <img className="pic" src={people} alt="react icon"/>
                        <h4>Funke Shade</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur"</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="pic" src={people} alt="react icon"/>
                        <h4>George Mike</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur"</p>
                    </div>
                    <div>
                        <img className="pic" src={people} alt="react icon"/>
                        <h4>Toyin Omotola</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur"</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;