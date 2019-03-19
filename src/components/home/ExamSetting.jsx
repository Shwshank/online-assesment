import React from 'react';
import { connect } from 'react-redux';
import { getExamSet } from '../../actions';

class ExamSetting extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state={set_id:"", name:"", time:"", question:[]}
  }

  componentDidMount() {
    this.props.getExamSet();
    console.log(this.props);
  }

  newSet(){
    console.log("Magic yet to be happen");
  }

  renderSet() {

    console.log(this.props.oneExamSet);
    if(this.props.oneExamSet) {
      if(this.props.oneExamSet[0].name) {
        let i = 0;

        return this.props.oneExamSet.map(set=>{
          i++;

          return(

            <div key={set.name+i+""}>

             <input
               className="form-control"
               id="name"
               type="text"
               value={this.state.name}
               onChange={this.setNameChanged}
             />
             <br/>

             <input
               className="form-control"
               id="name"
               type="text"
               value={this.state.time}
               onChange={this.setTimeChanged}
             />
             <br/>

             <button onClick={this.saveSet.bind(this,set)} > Save  </button>
            </div>
          )
        })
      }
    }
  }

  saveSet(set) {
    console.log("Set to be save "+set);
    console.log(this.state);
  }

  setNameChanged = async event => {
    await this.setState({
      name: event.target.value
    });
  };

  setTimeChanged = async event => {
    await this.setState({
      time: event.target.value
    });
  };

  render() {
    return(
      <div>
        <h4>Setting</h4>
        <button onClick={this.newSet} > + Exam Set </button>
        <div>
          {this.renderSet()}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {

  return { oneExamSet: state.oneExamSetReducer};
};

export default connect(
  mapStateToProps,
  { getExamSet }
)(ExamSetting);
