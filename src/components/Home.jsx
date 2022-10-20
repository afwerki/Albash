import React from "react";
import {
  CloudUploadIcon,
  FolderAddIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import bgimg from "../images/cyber-bg.png";
import './Herostyle.css'
// import Hero from "./Hero1";
// import Hero from "./Hero3";
import Hero from "./Hero";
import About from "./About";
import SmartTools from "./SmartTools";
import Article from "./articles/Article";
import Contact1 from "./Contact1";
import VideoBack from "./VideoBack";
// import SlowLoading from "./SlowLoading";

// import TeamsFlip from "./TeamsFlip";
// import Pricing from "./Pricing";

const Home = () => {
  return (
    <div>
   
      <Hero/>
   
      <SmartTools/>
      <Article/>
   
    
    </div>
  );
};

export default Home;
