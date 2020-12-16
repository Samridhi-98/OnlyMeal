import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//react-redux
import {Provider} from "react-redux";
import { Switch } from "react-router-dom";
import store from  "./store";

// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authAction";

//Private Route
// import PrivateRoute from "./components/routes/privateroute/PrivateRoute";
// //Route
// import Dashboard from "./components/routes/Dashboard";

// Check for token to keep user logged in
// if (localStorage.jwtToken) {
//     // Set auth token header auth
//     const token = localStorage.jwtToken;
//     setAuthToken(token);
//     // Decode token and get user info and exp
//     const decoded = jwt_decode(token);
//     // Set user and isAuthenticated
//     store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//     const currentTime = Date.now() / 1000; // to get in milliseconds
//     if (decoded.exp < currentTime) {
//       // Logout user
//       store.dispatch(logoutUser());
//       // Redirect to login
//       window.location.href = "./login";
//     }
// }

ReactDOM.render(
    <Provider store={store}>
        <App/>
        {/* <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch> */}
    </Provider>, 
    document.getElementById('root')
);