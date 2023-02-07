import "./App.css";
import "./MediaQuerries.css";
import Home from "./pages/Home";
import About from "./pages/About";
import PerBottom from "./components/PerBottom";
import Digitize from "./pages/Digitize";
import Carousel from "./pages/Carousel";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {


 
  return (
    <div className={`App  ${window.innerWidth <= 600 ? "" : "Desktop-View"}`}>
      <Home />
      <PerBottom />
      <About />
      <Digitize />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
