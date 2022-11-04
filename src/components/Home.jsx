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
import Hero from "./HeroSlieceTwo";
import About from "./About";
import SmartTools from "./SmartTools_updated";
import Article from "./articles/Article";
import Contact1 from "./Contact1";
import Teams_cardFlip from "./Teams_cardFlip";
import Small_description_section from "./Small_description_section";
import Talk_to_us from "./Talk_to_us";
import'./Home.css'
// import SlowLoading from "./SlowLoading";

// import TeamsFlip from "./TeamsFlip";
// import Pricing from "./Pricing";

const Home = () => {
  return (
    <div className="home-page">
   
      <Hero/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

   
    
      <Small_description_section/>
      {/* <SmartTools/> */}
      {/* <Talk_to_us/> */}
      <Article/>
      <Teams_cardFlip/>
   
    
    </div>
  );
};

export default Home;
