import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import './assets/css/style.css'
import Skills from "./components/Skills";
import ArtDesign from "./components/ArtDesign";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <NavBar />
      <div id="content-wrapper">
        <Home />
        <Skills />
        <ArtDesign />
        <About />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
