import React from "react";
import Header from "./Header";

class Exam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {redirect: true};
  }

  render() {
    return(
      <div>
        <Header/>
      </div>
    )
  }
}

export default Exam;
