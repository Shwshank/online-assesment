import React from "react";
import { connect } from "react-redux";
import { setUser, setUsers, deleteUser } from "../../actions";

class User extends React.Component {
  state = {
    toggle: true
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      phone: "",
      status: "",
      marks: "",
      timeStamp: ""
    };
    console.log(props);
  }

  componentWillMount() {
    this.props.setUsers();
  }

  renderUser() {
    if (this.props.users) {
      let i = 0;
      return this.props.users.map(u => {
        i++;
        return (
          <tr key={u.name + u.email + i + ""}>
            <td>{i}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.phone}</td>
            <td>{u.status}</td>
            <td>{u.marks}</td>
            <td>{u.timeStamp}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={this.deleteUser.bind(this, i)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }
  }

  deleteUser(i) {
    // console.log(i);
    console.log(this.props);
    this.props.deleteUser(i - 1);
  }

  createNewUser = async () => {
    console.log(this.state);
    this.props.setUser(this.state);
    await this.setState({
      email: "",
      name: "",
      phone: "",
      status: "",
      marks: "",
      timeStamp: ""
    });
    console.log(this.props);
  };

  nameChanged = async event => {
    await this.setState({
      name: event.target.value
    });
    // console.log(this.state);
  };

  emailChanged = async event => {
    await this.setState({
      email: event.target.value
    });
  };

  phoneChanged = async event => {
    await this.setState({
      phone: event.target.value
    });
  };
  handleToggle = () => {
    let toggle = !this.state.toggle;
    this.setState({ toggle });
  };
  toggleClasses() {
    let classes = "col-lg-6";
    classes += !this.state.toggle ? "" : " toggleActive";
    return classes;
  }
  render() {
    // console.log(this.props);
    let classes = this.toggleClasses();
    return (
      <React.Fragment>
        <div className="row">
          <h4
            className="col-lg-6"
            onClick={this.handleToggle}
            style={{ cursor: "pointer" }}
          >
            User
          </h4>
          <form className="col-lg-6">
            <input
              type="file"
              multiple=""
              className="fileUpload float-right"
              style={{ width: 100 }}
            />
          </form>
        </div>
        <div className="row">
          <div className={classes} style={{ marginBottom: 15 }}>
            <div className="card">
              <div className="card-header">
                <h5>Add an user </h5>
              </div>
              <div className="card-body">
                <div className="login">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.nameChanged}
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.emailChanged}
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Phone">phone:</label>
                      <input
                        className="form-control"
                        id="phone"
                        type="phone"
                        value={this.state.phone}
                        onChange={this.phoneChanged}
                        placeholder="Phone"
                      />
                    </div>

                    <button
                      className="btn btn-primary"
                      onClick={this.createNewUser}
                    >
                      Create User
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="col-lg-12">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Status</th>
                  <th scope="col">Marks</th>
                  <th scope="col">Exam Time</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{this.renderUser()}</tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.userReducer, questions: state.questionReducer };
};

export default connect(
  mapStateToProps,
  { setUser, setUsers, deleteUser }
)(User);