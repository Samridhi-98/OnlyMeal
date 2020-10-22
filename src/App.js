import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// routes
import CreateAvail from "./components/routes/CreateAvail";
import Main from "./components/routes/Main";
import FoodInfo from "./components/routes/FoodInfo";

//CSS
import "./css/master.css";
import Dashboard from "./components/routes/Dashboard";

// Images
import logo from "../src/images/logo1.svg";
const App = () => {
  return (
    // ------------------------------------------------------------------------
    <BrowserRouter>
      <div className="navbar-content">
        <div className="ui top fixed compact menu top-nav topnavbar" >
          <div className="item">
            <img className="ui tiny image" src={logo} alt="only meal" />
          </div>
          <Link className="item" to="/dashboard">Home</Link>
          <Link className="item" to="/create">Create</Link>
          <Link className="item" to="/">Sign-out</Link>
          {/* <div className="right menu logo">
            <h4>OnlyMeal</h4>
          </div> */}
        </div>
        {/* Bottom for phone */}
        <div className="ui top fixed compact menu top-nav fluid one item " >
            <h3 className="navheading">Only Meal</h3>
        </div>
        <div className="ui bottom fixed fluid three item menu bottomnavbar">
          {/* <div className="item">
            <img className="ui tiny image" src={logo} alt="only meal"/>
          </div> */}
          
            <Link className="item active" to="/dashboard"><i className="home icon big"></i></Link>
            <Link className="item" to="/create"><i className="edit icon big"></i></Link>
            <Link className="item" to="/"><i className="sign-out icon big"></i></Link>  
        
          
        </div>

        <div className="parent">
          <div className="">
            <Route path="/" exact component={Main} />
          </div>
        </div>
        <div>
          <Route path="/dashboard" component={Dashboard} />
        </div>
        <div>
          <Route path="/create" component={CreateAvail} />
        </div>
        <div>
          <Route path="/foodinfo" component={FoodInfo} />
        </div>
      </div>

    </BrowserRouter>
  );
};

export default App;
