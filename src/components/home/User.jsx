import React from 'react';
import { connect } from 'react-redux';
import { setUser, setUsers, deleteUser } from '../../actions';

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email:"", name:"", phone:"", status:"", marks:"", timeStamp:""};
    // console.log(props);
  }

  componentWillMount() {
    this.props.setUsers();
  }

  renderUser() {
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
            <td>{u.status}</td>
            <td>{u.marks}</td>
            <td>{u.timeStamp}</td>
            <td><button onClick={this.deleteUser.bind(this,i)}> Delete </button> </td>
          </tr>
        )
      })
    }
  }

  deleteUser(i) {
    // console.log(i);
    // console.log(this.props);
    this.props.deleteUser(i-1);
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
             <th scope="col">Exam Time</th>
             <th scope="col">Action</th>
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

  return { users: state.userReducer, questions: state.questionReducer};
};

export default connect(
  mapStateToProps,
  { setUser, setUsers, deleteUser }
)(User);
