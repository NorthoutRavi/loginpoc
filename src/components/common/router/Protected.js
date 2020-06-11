import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Protected = ({ component: Component, isLogedin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogedin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
const mapStateToProps = state => {
  console.log(state.isLoggedin);
  return {
    isLogedin: state.isLoggedin
  };
};
export default connect(mapStateToProps)(Protected);
