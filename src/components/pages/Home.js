import React from "react";
import FetchUser from "./FetchUser";
import {BsHouseFill } from 'react-icons/bs';



const Home = () => {

  return (
    // <div className="container">
      <div className="py-4 container">
        
        <h2><BsHouseFill size= '25px'/> Home Page</h2>
        <FetchUser />
        
        
      </div>
    // </div>
  );
};

export default Home;
