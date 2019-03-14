import React from 'react';
import history from '../history';
// import { Router, BrowserRouter } from 'react-router-dom';

class Header extends React.Component {

  logout() {
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

export default Header;
