import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import './assets/css/style.css'
import Skills from "./components/Skills";
import ArtDesign from "./components/ArtDesign";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HomeProvider } from "./context/HomeContext";


function App() {
  return (
    <HomeProvider>
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
    </HomeProvider>
  );
}

export default App;
