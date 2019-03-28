import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { setUser, setUsers, deleteUser, getExamSets, editUser } from '../../actions';

class User extends React.Component {

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
      return this.props.users.map(u=>{
        i++;
        return (
          <tr key={u.name+u.email+i+""}>
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
        )
      })
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

  createNewUser = async()=>{
    console.log(this.state);
    this.props.setUser(this.state);
    await this.setState({
      email:"", name:"", phone:"", status:"", marks:"", timeStamp:""
    })
    console.log(this.props);
  }

  nameChanged = async(event) =>{
    await this.setState({
      name: event.target.value
    })
    // console.log(this.state);
  }

  emailChanged = async(event) =>{
    await this.setState({
      email: event.target.value
    })
  }

  phoneChanged = async(event) =>{
    await this.setState({
      phone: event.target.value
    })
  }

  render() {
    // console.log(this.props);
    return(
      <div>
       <h4>User</h4>
       <h5>Add an user </h5>

       <input type="text" value={this.state.name} onChange={this.nameChanged} placeholder="Name"/>

       <input type="email" value={this.state.email} onChange={this.emailChanged} placeholder="Email"/>

       <input type="text" value={this.state.phone} onChange={this.phoneChanged} placeholder="Phone"/>

       <button onClick={this.createNewUser}> Create User </button>

       <hr/>
       <table className="table">
         <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Name</th>
             <th scope="col">Email</th>
             <th scope="col">Phone</th>
             <th scope="col">Status</th>
             <th scope="col">Marks</th>
             <th scope="col">Exam Scheduled on</th>
             <th scope="col">Actions</th>
           </tr>
         </thead>
         <tbody>
          {this.renderUser()}
         </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return { users: state.user, questions: state.question, examSet: state.examSet};
};

export default connect(
  mapStateToProps,
  { setUser, setUsers, deleteUser, getExamSets, editUser }
)(User);
