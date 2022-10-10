import About from "./components/About";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import SmartTools from "./components/SmartTools";
import Teams from "./components/Teams1";
import Login from "./components/Login";
import Pagniation from './components/Pagniation';
import Contact from "./components/Contact";
import Hero1 from "./components/Hero1";
import MegaMenu from "./components/MegaMenu";


function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     {/* <MegaMenu/> */}
     {/* <Hero1/> */}
     
     <SmartTools/>
     <Resources/>
     <About/>
     <Teams/>
     <Contact/>

     {/* <Pagniation/> */}
     {/* <Login/> */}
     {/* <Pricing/> */}
     <Footer/>
    </>
  );
}

export default App;
