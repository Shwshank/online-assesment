import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import UserTable from "./userTable";
import { uploadUserFile } from "../../api/APIendpoint";
import {
  setUser,
  setUsers,
  deleteUser,
  getExamSets,
  editUser
} from "../../actions";
import Footer from "./Footer";

class User extends React.Component {
  counter = 1;
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
      timeStamp: "",
      user: "",
      examSet: ""
    };
  }

  componentDidMount() {
    this.props.getExamSets();
    this.props.setUsers();
  }

  renderUser() {
    this.props.examSet.map(
      exam => (exam.label = exam.set_id + " : " + exam.name)
    );
    this.props.examSet.map(exam => (exam.value = exam.set_id));

    let i = 0;
    return this.props.users.map(u => {
      i++;
      return (
        <tr key={u.name + u.email + i + ""}>
          <td>{i}</td>
          <td>{u.name}</td>
          <td>{u.email}</td>
          <td>{u.phone}</td>
          <td>
            {u.status === "" ?  "": u.status + ", Exam :" + u.set_id}
          </td>
          <td>
            {parseInt(u.marks) > 0 ? u.marks + ", Exam : " + u.set_id : ""}
          </td>
          <td>{u.timeStamp}</td>
          <td>
            <Select
              options={this.props.examSet}
              onChange={opt => this.assignExamDropdown(opt, u)}
            />

            <button
              data-test="delete_user_button"
              onClick={this.assignExam}
              className="btn btn-primary btn-sm"
              style={{ margin: "5px 0px 0px 0px" }}
            >
              Assign
            </button>

            <button
              data-test="delete_user_button"
              onClick={this.deleteUser.bind(this, i, u)}
              className="btn btn-danger btn-sm float-right"
              style={{ margin: "5px 0px 0px 0px" }}
            >
              <i className="fa fa-trash" aria-hidden="true" />
              Delete User
            </button>
          </td>
        </tr>
      );
    });
  }

  assignExamDropdown(opt, user) {
    // console.log(opt.set_id);
    // console.log(user.user_id);
    this.setState({
      user: user,
      examSet: opt
    });
  }

  assignExam = async () => {
    // console.log(this.state);
    if (
      window.confirm(
        " Are you sure to assign " +
          this.state.user.name +
          " the " +
          this.state.examSet.name +
          " Exam set"
      )
    ) {
      await this.props.editUser(this.state.user, this.state.examSet);
    }
  };

  deleteUser = async (i, u) => {
    console.log(u);
    if (window.confirm("Are you sure to delete this user? ")) {
      await this.props.deleteUser(u, i - 1);
    }
  };

  createNewUser = async () => {
    // console.log(this.state);

    let user = {};
    user.name = this.state.name;
    user.email = this.state.email;
    user.phone = this.state.phone;
    user.set_id = "";
    user.status = "";
    user.marks = " ";
    user.timeStamp = "";

    await this.props.setUser(user);
    alert("Created!");
    await this.setState({
      email: "",
      name: "",
      phone: "",
      status: "",
      marks: "",
      timeStamp: ""
    });
    // console.log(this.props);
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
    classes += !this.state.toggle ? " toggleActive" : "";
    return classes;
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  createNewUser1 = async () => {
    let user = {};
    user.name = this.state.name;
    user.email = this.state.email;
    user.phone = this.state.phone;
    user.set_id = "";
    user.status = "";
    user.marks = " ";
    user.timeStamp = "";

    await this.props.setUser(user);
    alert("New user created");
    await this.setState({
      email: "",
      name: "",
      phone: "",
      status: "",
      marks: "",
      timeStamp: ""
    });
  };

  uploadUsersViaFile = $event => {
    let files = $event.target.files || $event.srcElement.files;
    let file = files[0];
    console.log(file);
    let formData = new FormData();
    formData.append("file", file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
       console.log(reader.result);
       uploadUserFile({file : reader.result}).then(res=>{
         console.log(res);
         alert("Success "+res.success);
       })
    }
  };

  render() {
    return (
      <div>
        <div data-test="user_div" className="container">
          <div className="row">
            <h4
              data-test="user_heading"
              className={`${this.toggleClasses()}`}
              onClick={this.handleToggle}
              style={{ cursor: "pointer", marginBottom: 20 }}
            >
              User <span id="triangle-down" />
            </h4>
            <div className="col-lg-6 text-right ">
              <span className="upload">
                <i className="fa fa-upload" />
                <input
                  type="file"
                  onChange={this.uploadUsersViaFile}
                  className="fileUpload"
                />
              </span>
            </div>
            <div
              data-test="add_user"
              className="col-lg-6 hide"
              style={{ marginBottom: 15 }}
            >
              <div className="card">
                <div className="card-header">
                  <h5>Add an user </h5>
                </div>
                <div className="card-body">
                  <div className="login">
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
                      onClick={this.createNewUser1}
                    >
                      Create User
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <UserTable onUserTable={this.renderUser()} />
            </div>
          </div>

        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.user,
    questions: state.question,
    examSet: state.examSet
  };
};

export default connect(
  mapStateToProps,
  { setUser, setUsers, deleteUser, getExamSets, editUser }
)(User);
