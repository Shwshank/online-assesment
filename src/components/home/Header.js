import React from 'react';
import history from '../history';
import { connect } from 'react-redux';
import { clearStore } from '../../actions';

class Header extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  logout = () => {
    this.props.clearStore();
    history.push('/logout');
  }

  goToUser() {
    history.push('/home/user');
  }
  goToQuestions() {
    history.push('/home/questions');
  }
  goToExamSet() {
    history.push('/home/examSet');
  }

  render() {
    return(
      <div>
       <h2>Header</h2>
       <button onClick={this.logout}> Logout </button>
        <br/><br/>
        <button onClick={this.goToUser}>User</button>
        <button onClick={this.goToQuestions}>Questions</button>
        <button onClick={this.goToExamSet}>Exam Sets</button>

       <hr/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return { users: state.userReducer};
};

export default connect(
  mapStateToProps,
  { clearStore }
)(Header);
