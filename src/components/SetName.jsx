import React from "react";
import { connect } from "react-redux";

import { setName } from "../actions";

class SetName extends React {
  render = () => {
    return (
      <React.Fragment>
        <h3>Set Name</h3>
      </React.Fragment>
    );
  };
}

const mapStateToProps = state => {
  console.log(state);
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  { setName }
)(SetName);
