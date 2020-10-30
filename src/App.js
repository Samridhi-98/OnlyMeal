import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// routes
import CreateAvail from "./components/routes/CreateAvail";
import Main from "./components/routes/Main";
import FoodInfo from "./components/routes/FoodInfo";
import Profile from "./components/routes/Profile";

import Totest from "./components/routes/Totest";

// Semantic-UI
import { Menu, Image, Header, Icon } from "semantic-ui-react";

//CSS
import "./css/master.css";
import Dashboard from "./components/routes/Dashboard";

// Images
import logo from "../src/images/logo1.svg";

class App extends React.Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      // ------------------------------------------------------------------------
      <div>
        <BrowserRouter>
          <Menu className="navbar fordesktop" fixed="top" pointing secondary>
            <Menu.Item>
              <Image src={logo} size="tiny" />
            </Menu.Item>
            <Menu.Item
              name="home"
              className="navbar-content"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            >
              <Link className=" " to="/dashboard">
                <Header>Home</Header>
              </Link>
            </Menu.Item>
            <Menu.Item
              name="create"
              className="navbar-content"
              active={activeItem === "create"}
              onClick={this.handleItemClick}
            >
              <Link className=" " to="/create">
                <Header>Create</Header>
              </Link>
            </Menu.Item>

            <Menu.Item
              name="profile"
              className="navbar-content"
              active={activeItem === "profile"}
              onClick={this.handleItemClick}
            >
              <Link className=" " to="/profile">
                <Header>Profile</Header>
              </Link>
            </Menu.Item>

            <Menu.Item
              name="signout"
              className="navbar-content"
              active={activeItem === "signout"}
              onClick={this.handleItemClick}
            >
              <Link className=" " to="/">
                <Header>Signout</Header>
              </Link>
            </Menu.Item>
          </Menu>
          {/* For Phone */}
          {/* TOP */}
          <Menu className="forphone phone-top" fixed="top" fluid widths={1}>
            <Menu.Item>
              <Header>Only Meal</Header>
            </Menu.Item>
          </Menu>
          {/* Bottom */}
          <Menu
            className="forphone "
            fixed="bottom"
            fluid
            widths={3}
            icon
            pointing
          >
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            >
              <Link className=" " to="/dashboard">
                <Icon color="black" size="large" name="home" />
              </Link>
            </Menu.Item>
            <Menu.Item
              name="create"
              active={activeItem === "create"}
              onClick={this.handleItemClick}
            >
              <Link className=" " to="/create">
                <Icon color="black" size="large" name="edit" />
              </Link>
            </Menu.Item>
            <Menu.Item
              name="signout"
              active={activeItem === "signout"}
              onClick={this.handleItemClick}
            >
              <Link className=" " to="/">
                <Icon color="black" size="large" name="sign-out" />
              </Link>
            </Menu.Item>
          </Menu>

          <div>
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
            <div>
              <Route path="/profile" component={Profile} />
            </div>
            <div>
              <Route path="/test" component={Totest} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
