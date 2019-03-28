import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { setUser, setUsers, deleteUser, getExamSets, editUser } from '../../actions';

class User extends React.Component {
  counter = 1;
  state = {
    toggle: true
  };
  constructor(props) {
    super(props);
    this.state = { email:"", name:"", phone:"", status:"", marks:"", timeStamp:"", user:"", examSet:""};

  }

  componentDidMount() {
    this.props.getExamSets();
    this.props.setUsers();
  }

  renderUser() {

    this.props.examSet.map(exam => exam.label = exam.set_id+" : "+exam.name)
    this.props.examSet.map(exam => exam.value = exam.set_id)

    if(this.props.users){
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
              { (u.status==="Assigned")? u.status+", Exam :"+u.set_id : "" }
            </td>
            <td>
              { u.marks? u.marks+", Exam : "+u.set_id :  "" }
            </td>
            <td>{u.timeStamp}</td>
            <td>

              <Select options={this.props.examSet}
              onChange={opt => this.assignExamDropdown(opt, u)}/>

              &nbsp;&nbsp;
              <button onClick={this.assignExam}> Assign </button>
              &nbsp;&nbsp;
              <button onClick={this.deleteUser.bind(this, i)}> Delete User </button>

            </td>
          </tr>
        );
      });
    }
  }

  assignExamDropdown( opt, user ) {
    // console.log(opt.set_id);
    // console.log(user.user_id);
    this.setState({
      user: user,
      examSet: opt
    })
  }

  assignExam = ()=>{
    // console.log(this.state);
    if(window.confirm(" Are you sure to assign "+this.state.user.name+" the "+ this.state.examSet.name + " Exam set")){
      this.props.editUser(this.state.user, this.state.examSet)
    }
  }

  deleteUser(i) {

    if(window.confirm("Are you sure to delete this user? ")){
      this.props.deleteUser(i-1);
    }
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
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {

    let classes = this.toggleClasses();
    return (
      <React.Fragment>
        <div className="row">
          <h4
            className="col-lg-6"
            onClick={this.handleToggle}
            style={{ cursor: "pointer", marginBottom: 20 }}
          >
            User
          </h4>
          <form className="col-lg-6">
            <div className="upload">
              <i className="fa fa-upload" aria-hidden="true" />
              <input
                type="file"
                multiple=""
                className="fileUpload"
                style={{ width: 100 }}
              />
            </div>
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
              <tbody>
                {this.renderUser()}
              </tbody>
            </table>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.user, questions: state.question, examSet: state.examSet};
};

export default connect(
  mapStateToProps,
  { setUser, setUsers, deleteUser, getExamSets, editUser }
)(User);
