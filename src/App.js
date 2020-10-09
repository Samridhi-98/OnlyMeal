import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// routes
import CreateAvail from "./components/routes/CreateAvail";
import Main from "./components/routes/Main";

//CSS
import "./css/master.css";
import Dashboard from "./components/routes/Dashboard";

// Images
import logo from "../src/images/giphy.webp";
const App = () => {
  return (
    // ------------------------------------------------------------------------
    <BrowserRouter>
      <div className="navbar-content">
        <div className="ui top fixed menu top-nav">
          <div className="item">
            <img src={logo} alt="giphyNoddle" />
          </div>
          <Link className="item" to="/dashboard">Home</Link>
          <Link className="item" to="/create">Create</Link>
          <Link className="item" to="/">Sign-out</Link>
          <div className="right menu logo">
            <h4>OnlyMeal</h4>
          </div>
        </div>

        {/* <div className="ui bottom fixed menu">
          <div className="item">
            <img src={logo}/>
          </div>
          <Link className="item" to="/dashboard">Home</Link>
          <Link className="item" to="/create">Create</Link>
          <Link className="item" to="/">Sign-out</Link>
        </div> */}

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
      </div>

    </BrowserRouter>
  );
};

export default App;
