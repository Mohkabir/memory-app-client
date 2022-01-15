import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import hero from "../images/unsplash1.jpg";

const LandingPage = () => {

  const [user, setUser] = useState(localStorage.getItem("auth")? JSON.parse(localStorage.getItem("auth")): null );


  return (
    <div className="landingpage text-center py-3">
        <h2 className="my-md-3">Welcome To The Memory Creation App</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <img className="hero" src={hero} alt="hero" />
          <div className="hero_text">
            <h3 className="mt-md-5">You Can Simply Create a Memory And Save.</h3>
            <button className="btn">
            <Link to={user? "/home":"/auth"} className="p-2 rounded text-white text-decoration-none">Get Started...</Link>
            </button>
          </div>
        </div>
    </div>
  )
}

export default LandingPage
