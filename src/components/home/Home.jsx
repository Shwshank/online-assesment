import React from "react";
import Auth from "../Auth";
import Header from "./Header";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: true };
  }

  componentWillMount() {
    if (!Auth()) {
      window.location.replace("#/login");
    } else {
      window.location.replace("#/home/user");
    }
  }

  render() {
    return (
      <div data-test="home_div">
        <Header />
      </div>
    );
  }
}

export default Home;
