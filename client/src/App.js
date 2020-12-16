import React from "react";

//REACT-ROUTER
import { BrowserRouter, Route,Switch } from "react-router-dom";
// REACT-REDUX
import {connect} from "react-redux";

//Reducer
import authDetails from "./reducers/index";

// STORE
import store from "./store";
//USER-DEFINED-ROUTER
import Dashboard from "./components/routes/Dashboard";
import CreateAvail from "./components/routes/CreateAvail";
import Register from "./components/routes/Register";
import Login from "./components/routes/Login";
import FoodInfo from "./components/routes/FoodInfo";
import Profile from "./components/routes/Profile";

//Private-Route
import PrivateRoute from "./components/routes/privateroute/PrivateRoute";

//CSS
import "./css/master.css";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import { bindActionCreators } from "redux";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends React.Component {
  
  render() {
    return (
      // ------------------------------------------------------------------------
      <div>
        <BrowserRouter>
          <div>
            <div className="parent">
              <div className="">
                <Route path="/" exact component={Register} />
              </div>
            </div>
            <div>
              <Route path="/login" component={Login} />
            </div>
          </div>
          <Switch>
            <PrivateRoute exact path="/foodinfo" component={FoodInfo} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/create" component={CreateAvail} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({authDetails},dispatch);
}
export default connect(null,mapDispatchToProps)(App);
//export default App;
