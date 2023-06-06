import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import "./App.css";
import Svg from "./Components/Svg";
import Svg2 from "./Components/Svg2";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Svg />
      <About />
      <Svg2 />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
