import Slider from "./components/slide";
import AboutMe from "./components/aboutMe";
import Skills from "./components/Skills";
import Service from "./components/Service";
import MileStone from "./components/MileStone";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
        <Menu/>
        <Slider/>
        <AboutMe/>
        <Skills/>
        <Service/>
        <MileStone/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
