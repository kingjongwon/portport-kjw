import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Works from "./Components/Works";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Scroll from "react-scroll";

let Element = Scroll.Element;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="About">
        <About />
      </Element>
      <Element name="Works">
        <Works />
      </Element>
      <Element name="Skills">
        <Skills />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
