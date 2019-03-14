import React from "react";
import { connect } from "react-redux";
import { setUser } from "../../actions";

class User extends React.Component {
  renderUser() {
    return this.props.users.map(u => {
      return (
        <tr key={u.name}>
          <td>{u.name}</td>
          <td>{u.email}</td>
          <td>{u.phone}</td>
          <td>{u.status}</td>
          <td>{u.marks}</td>
          <td>{u.timeStamp}</td>
        </tr>
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="col-lg-12">
        <h4>User</h4>
        <h5>Add an user </h5>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col">Marks</th>
              <th scope="col">Exam Time</th>
            </tr>
          </thead>
          <tbody>{this.renderUser()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  { setUser }
)(User);
