import React,{useState, useEffect} from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Test_Article = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(()=>{
        setIsVisible(true);
    },[]);
  return (
    
    <div>
      <p style={{
        opacity: isVisible ? 1 : 0,
          transition: 'opacity 4s ease-in-out'
      }}
      className={`fade-in ${isVisible ? 'visible' : ''}`}>Hello, this text will appear slowly.</p>
    </div>

  );
};

export default Test_Article;
