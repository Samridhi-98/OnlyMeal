import React from "react";
import { BrowserRouter, Route, Link} from "react-router-dom";

// routes
import CreateAvail from "./components/routes/CreateAvail";
import Main from "./components/routes/Main";
import FoodInfo from "./components/routes/FoodInfo";

// Semantic-UI
import {Menu, Image, Header,Icon } from 'semantic-ui-react';

//CSS
import "./css/master.css";
import Dashboard from "./components/routes/Dashboard";

// Images
import logo from "../src/images/logo1.svg";


class App extends React.Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render(){
    const { activeItem } = this.state;
    return (
      // ------------------------------------------------------------------------
      <BrowserRouter>
        <Menu className="navbar fordesktop" fixed="top" fluid="true" pointing secondary>
          <Menu.Item>
            <Image src={logo} size="tiny"/>
          </Menu.Item>
          <Menu.Item 
            name="home"
            className="navbar-content"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Link className=" " to="/dashboard"><Header>Home</Header></Link>
          </Menu.Item>
          <Menu.Item
            name="create"
            className="navbar-content"
            active={activeItem === 'create'}
            onClick={this.handleItemClick}
          >
            <Link className=" " to="/create"><Header>Create</Header></Link>
          </Menu.Item>
          <Menu.Item
            name="signout"
            className="navbar-content"
            active={activeItem === 'signout'}
            onClick={this.handleItemClick}
          >
            <Link className=" " to="/"><Header>Signout</Header></Link>
          </Menu.Item>
        </Menu>
        {/* For Phone */}
        {/* TOP */}
        <Menu className="forphone phone-top" fixed="top" fluid widths={1}>
          <Menu.Item><Header>Only Meal</Header></Menu.Item>
        </Menu>
        {/* Bottom */}
        <Menu className="forphone " fixed="bottom" fluid widths={3} icon pointing >
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Link className=" " to="/dashboard"><Icon color="black" size="large" name="home"/></Link>
          </Menu.Item>
          <Menu.Item
            name="create"
            
            active={activeItem === 'create'}
            onClick={this.handleItemClick}
          >
            <Link className=" " to="/create"><Icon color="black" size="large" name="edit"/></Link>
            
          </Menu.Item>
          <Menu.Item
            name="signout"
            
            active={activeItem === 'signout'}
            onClick={this.handleItemClick}
          >
            <Link className=" " to="/"><Icon color="black" size="large" name="sign-out"/></Link>
          </Menu.Item>
        </Menu>

        <div >
          {/* <div className="ui fixed compact menu pointing top-nav topnavbar " >
            <div className="item">
              <img className="ui tiny image" src={logo} alt="only meal" />
            </div>
            <Link className="item active" to="/dashboard">Home</Link>
            <Link className="item" to="/create">Create</Link>
            <Link className="item" to="/">Sign-out</Link>
           
          </div>
          
          <div className="ui top fixed compact menu top-nav fluid one item bottomnavbar" >
              <h3 className="navheading">Only Meal</h3>
          </div>
       
          <div className="ui bottom fixed fluid three item  menu bottomnavbar">
            
            
              <Link className="item" to="/dashboard"><i className="home icon big"></i></Link>
              <Link className="item" to="/create"><i className="edit icon big"></i></Link>
              <Link className="item" to="/"><i className="sign-out icon big"></i></Link>  
          
            
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
          <div>
            <Route path="/foodinfo" component={FoodInfo} />
          </div>
        </div>
  
      </BrowserRouter>
    );
  }
  
};

export default App;
