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
import Hero from "./Hero";
import About from "./About";
import SmartTools from "./SmartTools";

const Home = () => {
  return (
    <div>
      <Hero/>
      <SmartTools/>
      <About/>
    
    </div>
  );
};

export default Home;
