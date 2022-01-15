import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Auth from "./Componenets/Auth";
import Head from "./Componenets/Head";
import Home from "./Componenets/Home";
import LandingPage from "./Componenets/LandingPage";

function App(props) {

  const [user, setUser] = useState(localStorage.getItem("auth")? JSON.parse(localStorage.getItem("auth")): null );

  // useEffect(() => {
  //   window.location.reload();
  // }, [user])
 
  // console.log("user log", user);


  return (
    <div className="app">
     <Router>
         <Head />
          <Switch>
            <div className="wrapper">
              <Route exact path="/" component={LandingPage}/>

              {/* <Route exact path="/" component={()=> user? <LandingPage/>: <Redirect to="/home" />}/> */}

              <Route exact path="/home" component={()=> user? <Home/>: <Redirect to="/auth" />}/>
              {/* <Route exact path="/home" component={Home}/> */}
              
              <Route exact 
              path="/auth" 
              component={() => user? <Redirect to="/home" />: <Auth />} />


              {/* <Route exact path="/auth" component={Auth}/> */}
            </div>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
