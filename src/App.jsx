import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import "./App.css";
import Svg from "./Components/Svg";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Svg />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
