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
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>

     <Navbar/>
     <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/SmartTools" element={ <SmartTools/>}/>
      <Route path="/Resources" element={<Resources/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Teams" element={ <Teams/>}/>
      <Route path="/Contact" element={<Contact/>}/>
     </Routes>
      </Router>

     {/* <Hero/>
     <SmartTools/>
     <Resources/>
     <About/>
     <Teams/>
     <Contact/> */}

     <Footer/>
    </div>
  );
}

export default App;
