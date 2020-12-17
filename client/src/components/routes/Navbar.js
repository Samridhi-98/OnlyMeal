import React from "react";
import { Link } from "react-router-dom";
import {connect}  from "react-redux";
import {logoutUser} from "../../actions/authAction";
// SEMANTIC-UI
import { Menu, Image, Header, Icon } from "semantic-ui-react";

// IMAGES
import logo from "../../images/logo1.svg";

class Navbar extends React.Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  onLogoutClick=(e)=>{
    console.log("ye chala ???");
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const { activeItem } = this.state;
    return (
      <div>
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
            name="Request"
            className="navbar-content"
            active={activeItem === "Request"}
            onClick={this.handleItemClick}
          >
            <Link className=" " to="/create">
              <Header>Request</Header>
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
            onClick={this.onLogoutClick}
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
            onClick={this.onLogoutClick}
          >
            <Link className=" " to="/">
              <Icon color="black" size="large" name="sign-out" />
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
    return {
        logoutUser:state.logoutUser
    }
}
export default connect(mapStateToProps,{logoutUser})(Navbar);