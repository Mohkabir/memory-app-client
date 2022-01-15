import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import googlelogo from "../images/googlelogo.jpg";
import GoogleLogin from 'react-google-login';
// import Input from './Input';
import { auth, logIn, signUp } from '../Redux/actions/AuthAction';


const Auth = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const athdata = useSelector(state => state.auth.authdata);
  const [islogin, setIslogin] = useState(true)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })
  

  useEffect(() => {
    if( athdata === "signedUp"){
      //  setIslogin(!islogin);
    }
  }, [auth])


  const handleinput = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const successGoogle = async(res) => {

    const profile = res?.profileObj;
    const token = res?.tokenId;

    dispatch(auth({profile, token}, history));
    history.push("home");
  } 

  const failureGoogle = (error) => {
    console.log(error)
  }

  const toggleLogin = () => {
    setIslogin(!islogin);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(islogin){
      dispatch(logIn(formData, history));
    }else{
      dispatch(signUp(formData, history))
    }

    clear();
  }

  const clear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    })
  }

  return (
      <form onSubmit={handleSubmit} className="loginform">
        <h2 className="text-center my-4">{islogin ? "LOG IN":"SIGN UP" }</h2>
        
        {
          !islogin && (
            <>
              <input 
              type="text"
              placeholder="First name"
              name="firstName"
              onChange={handleinput}
              className="block my-2 outline-none bg-black border-2 rounded border-white p-1 w-full text-white"
              required
              value={formData.firstName}
              />

              <input 
              type="text"
              placeholder="Last name"
              name="lastName"
              type="text"
              onChange={handleinput}
              className="block my-2 outline-none bg-black border-2 rounded border-white p-1 w-full text-white"
              required
              value={formData.lastName}
              /> 
            </>
          )
        }
          <input 
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleinput}
            className="block my-2 outline-none bg-black border-2 rounded border-white p-1 w-full text-white"
            required
            value={formData.email}
          /> 

            <input 
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleinput}
            className="block my-2 outline-none bg-black border-2 rounded border-white p-1 w-full text-white"
            required
            value={formData.password}
            /> 

      <input type="submit" value={islogin ? "log in":"sign up" } className="btn_submit" />

        <GoogleLogin 
        clientId="443686113017-oa54qgtkmlpn73lpr5dsggkjpksme35p.apps.googleusercontent.com"
        render={renderProps => (
          <button 
            onClick={renderProps.onClick} 
            disabled={renderProps.disabled}
            className="google font-weight-bolder d-block w-100 bg-white rounded text-black my-2 p-1">
            
            <img className="googlelogo" src={googlelogo} alt="" />
            <span className="text-black font-weight-bolder"> {islogin ? "log in":"sign up" } with google</span> 
          </button>
        )}
        onSuccess={successGoogle}
        onFailure={failureGoogle}
        cookiePolicy={'single_host_origin'}
        />
        <p className=" cursor text-center"><small onClick={toggleLogin}>{islogin ?"dont have an account ? sign up":"Already have an account ? Log in"} </small></p>
    </form>
  )
}

export default Auth
