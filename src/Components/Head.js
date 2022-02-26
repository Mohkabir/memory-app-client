import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/actions/AuthAction';

import profile from "../images/profile.png"

const Head = () => {

  const isLogin = true;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useSelector((state)=> state.auth);


  const userdata = localStorage.getItem("auth")? JSON.parse(localStorage.getItem("auth")):null ;
  const [user, setUser] = useState(userdata);

  console.log(userdata, "userdata log");

  const logOut = () => {
    dispatch(logout());
    navigate('/auth');
  }


   useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("auth")));
   }, [auth, location])
  
  return (
    <div className="head p-1 py-md-3">
      <div className="wrapper p-md-2  d-flex justify-content-between flex-column flex-md-row my-0 mx-auto align-items-center">
          <h2>
            <Link to="/">
              <span className="px-md-2  text-white text-center">Memories App</span> 
            </Link>
          </h2>
          <div>

            {
              user ?(
                <div className="cursor-pointer">
                  <span>{user?.profile?.givenName ? user?.profile?.givenName : userdata?.result?.name} </span>
                  <img className="inline" style={{borderRadius: "50px", width:"50px"}} src={user?.profile?.imageUrl ? user.profile.imageUrl : profile } alt={user?.givenName} />
                </div>
              ):""
            }
            
            <div>
              {
                user? (
                  <p className="cursor-pointer" onClick={logOut} style={{cursor: "pointer"}}>Log out</p>
                ):(
                  <Link to="/auth"><p className="text-light">Log in</p></Link>
                )
              }   
            </div>
          </div>
      </div>
    </div>
  )
}

export default Head
