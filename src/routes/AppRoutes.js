import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Auth from "../Components/Auth";
import Head from "../Components/Head";
import Home from "../Components/Home";
import LandingPage from "../Components/LandingPage";
import { NoAuthRoute } from "./NoAuthRoute";
import { AuthRoute } from "./AuthRoute";

const AppRoutes = (props) => {

  // const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("auth")? JSON.parse(localStorage.getItem("auth")): null );
  
  const isLoggedIn = useSelector(state => state.loggedIn);

  return (
    <BrowserRouter> 
      <Head />
      <div className="wrapper">
      <Routes>
          

          {/* <NoAuthRoute path="/homee" element={<Home />}></NoAuthRoute> */}
          {/* <Route path="/auth" element={<Auth />}/>

          <Route path="/auth" element={<Auth />}/> */}

          <Route exact path='/auth' element={<NoAuthRoute/>}>
            <Route exact path='/auth' element={<Auth/>}/>
          </Route>

          <Route exact path='/home' element={<AuthRoute/>}>
            <Route path="/home" element={<Home />}/>
          </Route>


          <Route path="/" element={<LandingPage />}/> 
      </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
