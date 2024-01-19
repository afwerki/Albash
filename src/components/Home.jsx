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
import Hero from "./HeroSlieceTwo";
import Article from "./articles/Article";
import Teams_cardFlip from "./Teams_cardFlip";
import Aim from "./Aim";
import Talk_to_us from "./Talk_to_us";
import'./Home.css'
// import SlowLoading from "./SlowLoading";

// import TeamsFlip from "./TeamsFlip";
// import Pricing from "./Pricing";

const Home = () => {
  return (
    <div className="home-page">
   
      <Hero/>
      <Article/>
      <Teams_cardFlip/>
      <Aim/>
   
    
    </div>
  );
};

export default Home;
