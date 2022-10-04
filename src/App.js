import About from "./components/About";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import SmartTools from "./components/SmartTools";
import Teams from "./components/Teams";
import Login from "./components/Login";


function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <SmartTools/>
     <Resources/>
     <Teams/>
     {/* <Login/> */}
     {/* <Pricing/> */}
     <Footer/>
    </>
  );
}

export default App;
