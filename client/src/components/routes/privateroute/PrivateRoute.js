import React from "react";
import  {Route,Redirect} from"react-router-dom";
import {connect} from "react-redux";


const PrivateRoute = ({ component: Component, authDetails, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authDetails.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  const mapStateToProps = state => ({
    //changed auth to authDetails here too 
    authDetails: state.authDetails
  });
  
  export default connect(mapStateToProps)(PrivateRoute);