import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Public = ({ component: Component, isLogedin, ...rest }) => {
  console.log(isLogedin,"<<<<<<<<<<<<<<")
  return (
    <Route
      {...rest}
      render={props =>
        isLogedin ? <Redirect to="/" />: <Component {...props} />
      }
    />
  );
};
const mapStateToProps = state => {
  return {
    isLogedin: state.isLoggedin
  };
};
export default connect(mapStateToProps)(Public);
