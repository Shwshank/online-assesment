import React from "react";
import { connect } from "react-redux";

import { setName } from "../actions";

class SetName extends React {
  render = () => {
    return (
      <div>
        <h3>Set Name</h3>
      </div>
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
