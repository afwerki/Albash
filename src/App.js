import About from "./components/About";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
// import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Navbar from "./components/NavPages/Navbar_drop1";
import Pricing from "./components/Pricing";
import Smart_Tools_detail from "./components/Smart_Tools_detail";
import Teams from "./components/Teams";
import Login from "./components/Login";
import Pagniation from './components/Pagniation';
import Contact from "./components/Contact";
import Hero from "./components/Hero";
// import MegaMenu from "./components/MegaMenu";
import Training from "./components/Training";
import CaseStudy from "./components/Case_Study";
import Service_detail from "./components/Service_detail";
import Contact1 from "./components/Contact1";
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {
  CloudUploadIcon,
  FolderAddIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import bgimg from "./images/cyber-bg.png";
import Home from "./components/Home";



function App() {
  return (
    <>
    <Router>
     <Navbar/>
     {/* <MultilevelDropdown/> */}
    
    
     <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/Smart_Tools_detail" element={ <Smart_Tools_detail/>}/>
      <Route path="/Service_detail" element={ <Service_detail/>}/>
      <Route path="/Resources" element={<Resources/>}/>
      <Route path="/Login" element={ <Login/>}/>
      <Route path="/Training" element={   <Training/>}/>
      <Route path="/Case_Study" element={<CaseStudy/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Teams" element={ <Teams/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Contact1" element={<Contact1/>}/>
     </Routes>
      </Router>
     
     <Footer/>
    </> 
  );
}

export default App;